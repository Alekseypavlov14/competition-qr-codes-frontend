import { updateIsGeneratedSelector, useQRCodeGenerationStore } from '../stores/generation.store'
import { useNavigation } from '@/app/navigation'

// TODO
export function useGenerateQRCode() {
  const { navigateQRCodeGenerationResultPage } = useNavigation()
  
  const updateIsGenerated = useQRCodeGenerationStore(updateIsGeneratedSelector)

  function generateQRCode() {
    updateIsGenerated(true)
    navigateQRCodeGenerationResultPage()
  }

  return generateQRCode
}
