import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { QRCodeGenerationStepCustomization } from '../../steps/QRCodeGenerationStepCustomization'
import { QRCodeGenerationStepContent } from '../../steps/QRCodeGenerationStepContent'
import { QRCodeGenerationNavigation } from '../QRCodeGenerationNavigation'
import { QRCodeGenerationPreview } from '../QRCodeGenerationPreview'
import { QRCodeGenerationSteps } from '../QRCodeGenerationSteps'
import styles from './QRCodeGenerationForm.module.css'

export function QRCodeGenerationForm() {
  const step = useQRCodeGenerationStore(stepSelector)

  return (
    <div className={styles.QRCodeGenerationForm}>
      <div className={styles.Form}>
        <QRCodeGenerationSteps />
  
        {[
          <QRCodeGenerationStepContent />,
          <QRCodeGenerationStepCustomization />
        ][step]}
  
        <QRCodeGenerationNavigation />
      </div>
      
      <div className={styles.Preview}>
        <QRCodeGenerationPreview />
      </div>
    </div>
  )
}