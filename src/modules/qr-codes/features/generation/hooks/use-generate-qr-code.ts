import { analyticsEnabledSelector, contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { updateIsGeneratedSelector, useQRCodeGenerationStore } from '../stores/generation.store'
import { updateHashSelector, useQRCodeResultStore } from './../stores/result.store'
import { qrCodeGenerationAPI } from '../qr-code-generation.api'
import { mapDateToISOString } from '@/shared/utils/datetime'

export function useGenerateQRCode() {
  const content = useQRCodeGenerationContentStore(contentSelector)
  const analyticsEnabled = useQRCodeGenerationContentStore(analyticsEnabledSelector)

  const updateIsGenerated = useQRCodeGenerationStore(updateIsGeneratedSelector)
  const updateHash = useQRCodeResultStore(updateHashSelector)

  function generateQRCode() {
    // update flags
    updateIsGenerated(true)

    // handle analytics-enabled qr codes
    if (analyticsEnabled) createQRCodeWithAnalytics()
  }

  // for analytics-enabled qr codes
  function createQRCodeWithAnalytics() {
    // get current moment
    const date = mapDateToISOString(new Date())
    
    // api request
    qrCodeGenerationAPI.create({ content, date })
      .then(qrCode => updateHash(qrCode.hash))
  }

  return generateQRCode
}
