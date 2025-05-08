import { useQRCodeGenerationCustomizationStore, darkColorSelector, lightColorSelector, designSelector } from '../../stores/customization.store'
import { FileType, fileTypeJPEG, fileTypePNG, fileTypeSVG, fileTypeWebp, QRCode } from '@oleksii-pavlov/qr-codes'
import { useQRCodeGenerationContentStore, errorCorrectionSelector } from '../../stores/content.store'
import { getFileNameByContent, useDownloadQRCode } from '@/modules/qr-codes'
import { useQRCodeResultContent } from '../../hooks/use-qr-code-result-content'
import { QRCodePreview } from '@/modules/qr-codes'
import { useEffect } from 'react'
import { Button } from '@/shared/components/Button'
import styles from './QRCodeGenerationResult.module.css'
import { Hint } from '../../components/Hint'

export function QRCodeGenerationResult() {
  const result = useQRCodeResultContent()
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  // get downloading feature
  const { download, updateFileName, updatePrinterConfig } = useDownloadQRCode()

  // update file name
  useEffect(() => {
    updateFileName(getFileNameByContent(result))
  }, [result])

  // update design for downloading
  useEffect(() => {
    updatePrinterConfig({ darkColor, lightColor, design })
  }, [darkColor, lightColor, design])

  // callback for downloading
  function createFileDownloadCallback(fileType: FileType) {
    return () => {
      const qrCodeContent = QRCode.create({ message: result, minimalErrorCorrection: errorCorrection })
      download(qrCodeContent, fileType)
    }
  }

  return (
    <div className={styles.QRCodeGenerationResult}>
      <h4 className={styles.Title}>Your QR Code is ready!</h4>

      <div className={styles.Content}>
        <QRCodePreview 
          content={result}
          errorCorrection={errorCorrection}
          darkColor={darkColor}
          lightColor={lightColor}
          design={design}
        />

        <div className={styles.Downloads}>
          <Button block onClick={createFileDownloadCallback(fileTypeSVG)}>SVG</Button>
          <Button block onClick={createFileDownloadCallback(fileTypePNG)}>PNG</Button>
          <Button block onClick={createFileDownloadCallback(fileTypeJPEG)}>JPEG</Button>
          <Button block onClick={createFileDownloadCallback(fileTypeWebp)}>WEBP</Button>
        </div>

        <Hint>
          Download QR Code to use it in your activities <br />
          The customization settings are not saved!
        </Hint>
      </div>
    </div>
  )
}