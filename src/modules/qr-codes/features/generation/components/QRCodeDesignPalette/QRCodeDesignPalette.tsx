import { ComponentProps, useEffect, useRef } from 'react'
import { DesignToken, svgEngine } from '@oleksii-pavlov/qr-codes'
import { useDisplayQRCode } from '../../../displaying'
import { QRCodeExample } from './constants'
import styles from './QRCodeDesignPalette.module.css'
import clsx from 'clsx'

interface QRCodeDesignPaletteProps extends ComponentProps<'div'> {
  design: DesignToken
  isSelected?: boolean
}

export function QRCodeDesignPalette({ 
  design, 
  isSelected = false, 
  
  className, 
  children, 
  ...props 
}: QRCodeDesignPaletteProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { display, config, updateConfig } = useDisplayQRCode({ 
    lightColor: 'transparent',
    paddingCells: 0,
    engine: svgEngine,
  })

  function displayExample() {
    if (!containerRef.current) return
    display(containerRef.current, QRCodeExample)
  }

  useEffect(() => updateConfig({ design }), [design])
  useEffect(() => displayExample(), [config])

  return (
    <div 
      className={clsx(styles.QRCodeDesignPalette, isSelected && styles.Selected, className)}
      {...props}
    >
      <div className={styles.Container} ref={containerRef} />
    </div>
  )
}