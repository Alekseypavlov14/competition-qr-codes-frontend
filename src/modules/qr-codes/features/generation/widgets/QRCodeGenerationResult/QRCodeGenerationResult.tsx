import { useQRCodeGenerationCustomizationStore, darkColorSelector, lightColorSelector, designSelector } from '../../stores/customization.store'
import { useQRCodeGenerationContentStore, errorCorrectionSelector } from '../../stores/content.store'
import { useQRCodeResultContent } from '../../hooks/use-qr-code-result-content'
import { QRCodePreview } from '@/modules/qr-codes'
import { Loader } from '@/shared/components/Loader'
import { Button } from '@/shared/components/Button'
import styles from './QRCodeGenerationResult.module.css'

export function QRCodeGenerationResult() {
  const { result, isLoaded } = useQRCodeResultContent()
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  if (!isLoaded) return (
    <div className={styles.QRCodeGenerationResult}>
      <h4 className={styles.Title}>Preparing your QR Code</h4>
      
      <Loader />
    </div>
  )

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
          <Button block>SVG</Button>
          <Button block>PNG</Button>
          <Button block>JPEG</Button>
          <Button block>WEBP</Button>
        </div>
      </div>
    </div>
  )
}