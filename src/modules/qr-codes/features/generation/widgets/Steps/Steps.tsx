import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { STEPS_AMOUNT } from '../../constants'
import styles from './Steps.module.css'

export function Steps() {
  const step = useQRCodeGenerationStore(stepSelector)

  return (
    <h6 className={styles.Steps}>
      Step {step + 1} of {STEPS_AMOUNT}
    </h6>
  )
}