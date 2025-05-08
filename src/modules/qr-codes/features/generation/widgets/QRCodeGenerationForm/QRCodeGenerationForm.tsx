import { stepSelector, useQRCodeGenerationStore } from '../../stores/generation.store'
import { loadingSelector, useQRCodeResultStore } from '../../stores/result.store'
import { QRCodeGenerationStepCustomization } from '../../steps/QRCodeGenerationStepCustomization'
import { QRCodeGenerationStepContent } from '../../steps/QRCodeGenerationStepContent'
import { QRCodeGenerationNavigation } from '../QRCodeGenerationNavigation'
import { QRCodeGenerationPreview } from '../QRCodeGenerationPreview'
import { QRCodeGenerationResult } from '../QRCodeGenerationResult'
import { resultLoadingStateDone } from '../../constants'
import { QRCodeGenerationSteps } from '../QRCodeGenerationSteps'
import { useResetState } from '../../hooks/use-reset-state'
import styles from './QRCodeGenerationForm.module.css'

export function QRCodeGenerationForm() {
  useResetState()

  const step = useQRCodeGenerationStore(stepSelector)
  const loading = useQRCodeResultStore(loadingSelector)

  if (loading === resultLoadingStateDone) return (
    <QRCodeGenerationResult />
  )

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