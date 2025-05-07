import { analyticsEnabledSelector, contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { hashSelector, useQRCodeResultStore } from '../stores/result.store'
import { getQRCodeAnalyticContent } from '../../analytics'

export function useQRCodeResultContent() {
  const content = useQRCodeGenerationContentStore(contentSelector)
  const analyticsEnabled = useQRCodeGenerationContentStore(analyticsEnabledSelector)
  
  const hash = useQRCodeResultStore(hashSelector)

  const displayContent = analyticsEnabled 
    ? getQRCodeAnalyticContent(hash)
    : content

  return displayContent
}
