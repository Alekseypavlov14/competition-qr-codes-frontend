import { ErrorCorrectionList, ErrorCorrectionPalette, errorCorrectionPercentageMap, getQRCodeAnalyticContent, QRCodeDesignPalette, QRCodeDesignPaletteList, QRCodePreview } from '@/modules/qr-codes'
import { darkColorSelector, designSelector, errorCorrectionSelector, lightColorSelector, updateDarkColorSelector, updateDesignSelector, updateErrorCorrectionSelector, updateLightColorSelector, useEditorStore } from '../../stores/editor.store'
import { designsList, ERROR_CORRECTION_ASCENDING_LIST } from '@oleksii-pavlov/qr-codes'
import { qrCodeSelector, useQRCodeStore } from '../../stores/qr-code.store'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { ChangeEvent } from 'react'
import { Input } from '@/shared/components/Input'
import styles from './QRCodeAnalyticsEditor.module.css'

export function QRCodeAnalyticsEditor() {
  const qrCode = useQRCodeStore(qrCodeSelector)

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

  return (
    <div className={styles.QRCodeAnalyticsEditor}>
      <div className={styles.Preview}>
        <QRCodePreview 
          content={getQRCodeAnalyticContent(qrCode?.content ?? '')}
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
      </div>

      <div className={styles.Download}></div>
    </div>
  )
}