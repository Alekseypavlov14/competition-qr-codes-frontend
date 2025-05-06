import { useQRCodeGenerationCustomizationStore, darkColorSelector, lightColorSelector, designSelector } from '../../stores/customization.store'
import { useQRCodeGenerationContentStore, contentSelector, errorCorrectionSelector } from '../../stores/content.store'
import { useEffect, useRef } from 'react'
import { useDisplayQRCode } from '../../../displaying'
import { Button } from '@/shared/components/Button'
import { QRCode } from '@oleksii-pavlov/qr-codes'
import styles from './QRCodeGenerationResult.module.css'

export function QRCodeGenerationResult() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const content = useQRCodeGenerationContentStore(contentSelector)
  const errorCorrection = useQRCodeGenerationContentStore(errorCorrectionSelector)
  
  const darkColor = useQRCodeGenerationCustomizationStore(darkColorSelector)
  const lightColor = useQRCodeGenerationCustomizationStore(lightColorSelector)
  const design = useQRCodeGenerationCustomizationStore(designSelector)

  const { display } = useDisplayQRCode({ darkColor, lightColor, design })

  // revalidate preview
  function revalidatePreview() {
    const qrCode = QRCode.create({
      message: content,
      minimalErrorCorrection: errorCorrection
    })

    const container = containerRef.current
    if (!container) return

    display(container, qrCode)
  }

  // revalidate preview
  useEffect(revalidatePreview, [])

  return (
    <div className={styles.QRCodeGenerationResult}>
      <h3 className={styles.Title}>Your QR Code is ready!</h3>

      <div className={styles.Content}>
        <div className={styles.QRCode} ref={containerRef} />

        <div className={styles.Downloads}>
          <Button block>SVG</Button>
          <Button block>PNG</Button>
          <Button block>JPEG</Button>
          <Button block>WEBP</Button>
        </div>
      </div>
    </div>
  )
}