import { darkColorSelector, designSelector, lightColorSelector, useQRCodeGenerationCustomizationStore } from '../../stores/customization.store'
import { contentSelector, errorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { useEffect, useRef } from 'react'
import { useDisplayQRCode } from '@/modules/qr-codes'
import { useDebounce } from '@/shared/hooks/use-debounce'
import { QRCode } from '@oleksii-pavlov/qr-codes'
import styles from './Preview.module.css'

export function Preview() {
  const { display, config, updateConfig } = useDisplayQRCode()
  const containerRef = useRef<HTMLDivElement>(null)

  // state
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  // revalidate preview
  function revalidatePreview() {
    const qrCode = QRCode.create({
      message: content,
      minimalErrorCorrection: errorCorrection
    })

    display(containerRef, qrCode)
  }

  // debounce callback
  const debouncedRevalidatePreview = useDebounce(revalidatePreview)

  // update config
  useEffect(() => {
    updateConfig({ 
      darkColor: darkColor || BLACK_COLOR, 
      lightColor: lightColor || WHITE_COLOR, 
      design 
    })
  }, [darkColor, lightColor, design])

  // revalidate preview
  useEffect(debouncedRevalidatePreview, [content, errorCorrection, config])

  return (
    <div className={styles.Preview}>
      <div 
        className={styles.Container}
        ref={containerRef}
      />

      <div className={styles.Caption}>Preview</div>
    </div>
  )
}