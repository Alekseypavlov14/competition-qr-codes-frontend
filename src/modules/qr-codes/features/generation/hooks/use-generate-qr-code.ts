import { analyticsEnabledSelector, contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { updateIsGeneratedSelector, useQRCodeGenerationStore } from '../stores/generation.store'

// TODO
export function useGenerateQRCode() {
  const content = useQRCodeGenerationContentStore(contentSelector)
  const analyticsEnabled = useQRCodeGenerationContentStore(analyticsEnabledSelector)
  
  const updateIsGenerated = useQRCodeGenerationStore(updateIsGeneratedSelector)

  function generateQRCode() {
    updateIsGenerated(true)
  }

  return generateQRCode
}
