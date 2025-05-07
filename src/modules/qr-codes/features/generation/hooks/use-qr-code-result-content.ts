import { analyticsEnabledSelector, contentSelector, useQRCodeGenerationContentStore } from '../stores/content.store'
import { hashSelector, useQRCodeResultStore } from '../stores/result.store'
import { getQRCodeAnalyticContent } from '../../analytics'
import { useEffect, useState } from 'react'

export function useQRCodeResultContent() {
  const [ result, setResult ] = useState('')
  const [ isLoaded, setLoaded ] = useState(false)

  const content = useQRCodeGenerationContentStore(contentSelector)
  const analyticsEnabled = useQRCodeGenerationContentStore(analyticsEnabledSelector)
  
  const hash = useQRCodeResultStore(hashSelector)

  useEffect(() => {
    const result = analyticsEnabled 
      ? getQRCodeAnalyticContent(hash)
      : content

    setResult(result)
    setLoaded(true)
  }, [content, analyticsEnabled, hash])

  return { result, isLoaded }
}
