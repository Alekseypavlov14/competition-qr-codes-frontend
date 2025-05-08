import { updateHashSelector, updateLoadingSelector, useQRCodeResultStore } from './../stores/result.store'
import { resultLoadingStateDone, resultLoadingStateLoading } from '../constants'
import {contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { qrCodeGenerationAPI } from '../qr-code-generation.api'
import { mapDateToISOString } from '@/shared/utils/datetime'

export function useGenerateQRCode() {
  const content = useQRCodeGenerationContentStore(contentSelector)

  const updateHash = useQRCodeResultStore(updateHashSelector)
  const updateLoadingState = useQRCodeResultStore(updateLoadingSelector)

  async function generateQRCode() {
    updateLoadingState(resultLoadingStateLoading)

    // get current moment
    const date = mapDateToISOString(new Date())
    
    // api request
    await qrCodeGenerationAPI.create({ content, date })
      .then(qrCode => updateHash(qrCode.hash))
      .then(() => updateLoadingState(resultLoadingStateDone))
  }

  return generateQRCode
}
