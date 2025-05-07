import { resetCustomizationSelector, useQRCodeGenerationCustomizationStore } from '../stores/customization.store'
import { resetContentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { resetGenerationSelector, useQRCodeGenerationStore } from '../stores/generation.store'
import { useEffect } from 'react'

export function useResetState() {
  const resetContent = useQRCodeGenerationContentStore(resetContentSelector)
  const resetCustomization = useQRCodeGenerationCustomizationStore(resetCustomizationSelector)
  const resetGeneration = useQRCodeGenerationStore(resetGenerationSelector)

  function reset() {
    resetContent()
    resetCustomization()
    resetGeneration()
  }

  useEffect(() => {
    reset()

    return () => {
      reset()
    }
  }, [])
}
