import { decrementStepSelector, incrementStepSelector, stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { STEPS_AMOUNT } from '../../constants'
import { Button } from '@/shared/components/Button'
import styles from './Navigation.module.css'

export function Navigation() {
  const step = useQRCodeGenerationStore(stepSelector)
  const incrementStep = useQRCodeGenerationStore(incrementStepSelector)
  const decrementStep = useQRCodeGenerationStore(decrementStepSelector)

  // get state
  const isFirstStep = step === 0
  const isLastStep = step === STEPS_AMOUNT - 1

  return (
    <div className={styles.Navigation}>
      {!isFirstStep ? (
        <Button onClick={decrementStep}>Back</Button>
      ) : null}

      {!isLastStep ? (
        <Button onClick={incrementStep}>Next</Button>
      ) : null}

      {isLastStep ? (
        <Button filled>Create</Button>
      ) : null}
    </div>
  )
}