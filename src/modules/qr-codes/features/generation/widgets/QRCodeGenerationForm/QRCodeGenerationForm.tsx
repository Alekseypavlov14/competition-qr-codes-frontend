import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { QRCodeGenerationStepCustomization } from '../../steps/QRCodeGenerationStepCustomization'
import { QRCodeGenerationStepContent } from '../../steps/QRCodeGenerationStepContent'
import { Navigation } from '../Navigation'
import { Preview } from '../Preview'
import { Steps } from '../Steps'
import styles from './QRCodeGenerationForm.module.css'

export function QRCodeGenerationForm() {
  const step = useQRCodeGenerationStore(stepSelector)

  return (
    <div className={styles.QRCodeGenerationForm}>
      <div className={styles.Form}>
        <Steps />
  
        {[
          <QRCodeGenerationStepContent />,
          <QRCodeGenerationStepCustomization />
        ][step]}
  
        <Navigation />
      </div>
      
      <div className={styles.Preview}>
        <Preview />
      </div>
    </div>
  )
}