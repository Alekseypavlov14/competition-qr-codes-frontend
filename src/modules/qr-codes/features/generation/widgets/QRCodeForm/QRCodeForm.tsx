import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { QRCodeGenerationStepCustomization } from '../../steps/QRCodeGenerationStepCustomization'
import { QRCodeGenerationStepContent } from '../../steps/QRCodeGenerationStepContent'
import { Navigation } from '../Navigation'
import { Preview } from '../Preview'
import { Steps } from '../Steps'
import styles from './QRCodeForm.module.css'

export function QRCodeForm() {
  const step = useQRCodeGenerationStore(stepSelector)

  const stepForms = [
    <QRCodeGenerationStepContent />,
    <QRCodeGenerationStepCustomization />
  ]

  return (
    <div className={styles.QRCodeForm}>
      <div className={styles.Form}>
        <Steps />
  
        {stepForms[step]}
  
        <Navigation />
      </div>
      
      <div className={styles.Preview}>
        <Preview />
      </div>
    </div>
  )
}