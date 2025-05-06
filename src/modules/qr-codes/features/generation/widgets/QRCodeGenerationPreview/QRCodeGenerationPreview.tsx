import { darkColorSelector, designSelector, lightColorSelector, useQRCodeGenerationCustomizationStore } from '../../stores/customization.store'
import { contentSelector, errorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { QRCodePreview } from '@/modules/qr-codes'
import styles from './QRCodeGenerationPreview.module.css'

export function QRCodeGenerationPreview() {
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  return (
    <div className={styles.QRCodeGenerationPreview}>
      <QRCodePreview 
        content={content}
        errorCorrection={errorCorrection}
        darkColor={darkColor}
        lightColor={lightColor}
        design={design}
      />

      <div className={styles.Caption}>Preview</div>
    </div>
  )
}