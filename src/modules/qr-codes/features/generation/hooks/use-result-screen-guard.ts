import { isGeneratedSelector, useQRCodeGenerationStore } from '../stores/generation.store'
import { useNavigation } from '@/app/navigation'
import { useEffect } from 'react'

export function useResultScreenGuard() {
  const { navigateHomePage } = useNavigation()

  const isGenerated = useQRCodeGenerationStore(isGeneratedSelector)
  
  useEffect(() => {
    if (isGenerated) return
    
    navigateHomePage()
  }, [isGenerated])
}
