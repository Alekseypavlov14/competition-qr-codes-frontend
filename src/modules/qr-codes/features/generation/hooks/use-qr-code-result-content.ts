import { contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { hashSelector, useQRCodeResultStore } from '../stores/result.store'
import { getQRCodeAnalyticContent } from '../../analytics'
import { useMemo } from 'react'

export function useQRCodeResultContent() {
  const content = useQRCodeGenerationContentStore(contentSelector)
  const hash = useQRCodeResultStore(hashSelector)

  const result = useMemo(() => getQRCodeAnalyticContent(hash), [content, hash])

  return result
}
