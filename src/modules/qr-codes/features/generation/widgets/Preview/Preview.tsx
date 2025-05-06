import { darkColorSelector, designSelector, lightColorSelector, useQRCodeGenerationCustomizationStore } from '../../stores/customization.store'
import { contentSelector, errorCorrectionSelector, useQRCodeGenerationContentStore } from '../../stores/content.store'
import { useEffect, useRef } from 'react'
import { useDisplayQRCode } from '@/modules/qr-codes'
import { QRCode } from '@oleksii-pavlov/qr-codes'
import styles from './Preview.module.css'

export function Preview() {
  const containerRef = useRef<HTMLDivElement>(null)

  // state
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  const { display, updateConfig } = useDisplayQRCode()

  // revalidate preview
  useEffect(() => {
    const qrCode = QRCode.create({
      message: content,
      minimalErrorCorrection: errorCorrection
    })

    updateConfig({ darkColor, lightColor, design })
    display(containerRef, qrCode)
  }, [content, darkColor, lightColor, design])

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