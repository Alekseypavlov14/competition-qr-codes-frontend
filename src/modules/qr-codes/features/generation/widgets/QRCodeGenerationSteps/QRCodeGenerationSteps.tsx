import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { STEPS_AMOUNT } from '../../constants'
import styles from './QRCodeGenerationSteps.module.css'

export function QRCodeGenerationSteps() {
  const step = useQRCodeGenerationStore(stepSelector)

  return (
    <h6 className={styles.QRCodeGenerationSteps}>
      Step {step + 1} of {STEPS_AMOUNT}
    </h6>
  )
}