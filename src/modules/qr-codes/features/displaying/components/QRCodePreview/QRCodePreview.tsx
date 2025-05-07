import { designClassic, DesignToken, ERROR_CORRECTION_M, ErrorCorrection, QRCode } from '@oleksii-pavlov/qr-codes'
import { ComponentProps, useEffect, useRef } from 'react'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { useDisplayQRCode } from '../../hooks/use-display-qr-code'
import { useDebounce } from '@/shared/hooks/use-debounce'
import styles from './QRCodePreview.module.css'
import clsx from 'clsx'

interface QRCodePreviewProps extends ComponentProps<'div'> {
  content: string
  errorCorrection?: ErrorCorrection
  
  darkColor?: string
  lightColor?: string
  design?: DesignToken

  responsive?: boolean
  debounce?: boolean
}

export function QRCodePreview({ 
  content,  
  errorCorrection = ERROR_CORRECTION_M,
  darkColor = BLACK_COLOR,
  lightColor = WHITE_COLOR,
  design = designClassic,

  responsive = false,
  debounce = false,

  className,
  children,
  ...props 
}: QRCodePreviewProps) {
  const { display, config, updateConfig } = useDisplayQRCode()
  const containerRef = useRef<HTMLDivElement>(null)

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

  // debounced version
  const debouncedRevalidatePreview = useDebounce(revalidatePreview)

  // update styles
  useEffect(() => {
    updateConfig({ darkColor, lightColor, design })
  }, [darkColor, lightColor, design])

  // update content
  useEffect(() => {
    if (debounce) return debouncedRevalidatePreview()
    revalidatePreview()
  }, [content, errorCorrection, config])

  return (
    <div 
      className={clsx(styles.QRCodePreview, responsive && styles.Responsive, className)}
      ref={containerRef}
      {...props}
    >
      {children}
    </div>
  )
}