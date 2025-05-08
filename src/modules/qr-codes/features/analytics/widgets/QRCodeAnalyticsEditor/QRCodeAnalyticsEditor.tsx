import { ErrorCorrectionList, ErrorCorrectionPalette, errorCorrectionPercentageMap, getQRCodeAnalyticContent, Hint, QRCodeDesignPalette, QRCodeDesignPaletteList, QRCodePreview, useDownloadQRCode } from '@/modules/qr-codes'
import { darkColorSelector, designSelector, errorCorrectionSelector, lightColorSelector, updateDarkColorSelector, updateDesignSelector, updateErrorCorrectionSelector, updateLightColorSelector, useEditorStore } from '../../stores/editor.store'
import { designsList, ERROR_CORRECTION_ASCENDING_LIST, FileType, fileTypeJPEG, fileTypePNG, fileTypeSVG, fileTypeWebp, QRCode } from '@oleksii-pavlov/qr-codes'
import { qrCodeSelector, useQRCodeStore } from '../../stores/qr-code.store'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { ChangeEvent, useEffect } from 'react'
import { useNotifications } from '@/app/notifications'
import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import styles from './QRCodeAnalyticsEditor.module.css'

export function QRCodeAnalyticsEditor() {
  const qrCode = useQRCodeStore(qrCodeSelector)

  const { success } = useNotifications()

  // form state
  const errorCorrection = useEditorStore(errorCorrectionSelector)
  const darkColor = useEditorStore(darkColorSelector)
  const lightColor = useEditorStore(lightColorSelector)
  const design = useEditorStore(designSelector)

  const updateErrorCorrection = useEditorStore(updateErrorCorrectionSelector)
  const updateDarkColor = useEditorStore(updateDarkColorSelector)
  const updateLightColor = useEditorStore(updateLightColorSelector)
  const updateDesign = useEditorStore(updateDesignSelector)

  function updateDarkColorHandler(e: ChangeEvent<HTMLInputElement>) {
    updateDarkColor(e.target.value)
  }
  function updateLightColorHandler(e: ChangeEvent<HTMLInputElement>) {
    updateLightColor(e.target.value)
  }

  // get download feature
  const { download, updateFileName, updatePrinterConfig } = useDownloadQRCode()

  // update file name to download
  useEffect(() => updateFileName(qrCode?.content ?? ''), [qrCode])

  // connect downloader with form state
  useEffect(() => updatePrinterConfig({ lightColor, darkColor, design }), [darkColor, lightColor, design])

  // callback for downloading
  function createFileDownloadCallback(fileType: FileType) {
    return () => {
      const qrCodeContent = QRCode.create({ message: qrCode?.content ?? '', minimalErrorCorrection: errorCorrection })
      download(qrCodeContent, fileType)
      success('Image is downloaded!')
    }
  }

  return (
    <div className={styles.QRCodeAnalyticsEditor}>
      <div className={styles.Preview}>
        <QRCodePreview 
          content={getQRCodeAnalyticContent(qrCode?.hash ?? '')}
          errorCorrection={errorCorrection}
          darkColor={darkColor}
          lightColor={lightColor}
          design={design}
        />
      </div>

      <div className={styles.Form}>
        <ErrorCorrectionList>
          {ERROR_CORRECTION_ASCENDING_LIST.map(errorCorrectionOption => (
            <ErrorCorrectionPalette 
              onClick={() => updateErrorCorrection(errorCorrectionOption)}
              isSelected={errorCorrection === errorCorrectionOption}
              key={errorCorrectionOption}
            >
              {errorCorrectionPercentageMap[errorCorrectionOption]}%
            </ErrorCorrectionPalette>
          ))}
        </ErrorCorrectionList>

        <div className={styles.Colors}>
          <Input 
            value={darkColor}
            className={styles.ColorField}
            onChange={updateDarkColorHandler}
            placeholder={BLACK_COLOR}
          />

          <Input 
            value={lightColor}
            className={styles.ColorField}
            onChange={updateLightColorHandler}
            placeholder={WHITE_COLOR}
          />
        </div>

        <QRCodeDesignPaletteList>
          {designsList.map(designOption => (
            <QRCodeDesignPalette 
              design={designOption}
              isSelected={design === designOption}
              onClick={() => updateDesign(designOption)}
              key={designOption}
            />
          ))}
        </QRCodeDesignPaletteList>

        <Hint>You can have differently customized QR Codes having the same content.</Hint>
      </div>

      <div className={styles.Downloads}>
        <Button block onClick={createFileDownloadCallback(fileTypeSVG)}>SVG</Button>
        <Button block onClick={createFileDownloadCallback(fileTypePNG)}>PNG</Button>
        <Button block onClick={createFileDownloadCallback(fileTypeJPEG)}>JPEG</Button>
        <Button block onClick={createFileDownloadCallback(fileTypeWebp)}>WEBP</Button>
      </div>
    </div>
  )
}