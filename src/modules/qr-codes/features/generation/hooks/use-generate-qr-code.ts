import { updateIsGeneratedSelector, useQRCodeGenerationStore } from '../stores/generation.store'

// TODO
export function useGenerateQRCode() {
  const updateIsGenerated = useQRCodeGenerationStore(updateIsGeneratedSelector)

  function generateQRCode() {
    updateIsGenerated(true)
  }

  return generateQRCode
}
