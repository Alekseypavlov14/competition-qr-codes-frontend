import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { QRCodeGenerationStepCustomization } from '../../steps/QRCodeGenerationStepCustomization'
import { QRCodeGenerationStepContent } from '../../steps/QRCodeGenerationStepContent'
import { Navigation } from '../Navigation'
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
      <Steps />

      {stepForms[step]}

      <Navigation />
    </div>
  )
}