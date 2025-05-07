import { resetCustomizationSelector, useQRCodeGenerationCustomizationStore } from '../stores/customization.store'
import { resetContentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { resetGenerationSelector, useQRCodeGenerationStore } from '../stores/generation.store'
import { resetResultSelector, useQRCodeResultStore } from '../stores/result.store'
import { useEffect } from 'react'

export function useResetState() {
  const resetContent = useQRCodeGenerationContentStore(resetContentSelector)
  const resetCustomization = useQRCodeGenerationCustomizationStore(resetCustomizationSelector)
  const resetGeneration = useQRCodeGenerationStore(resetGenerationSelector)
  const resetResult = useQRCodeResultStore(resetResultSelector)

  function reset() {
    resetContent()
    resetCustomization()
    resetGeneration()
    resetResult()
  }

  useEffect(() => {
    reset()

    return () => {
      reset()
    }
  }, [])
}