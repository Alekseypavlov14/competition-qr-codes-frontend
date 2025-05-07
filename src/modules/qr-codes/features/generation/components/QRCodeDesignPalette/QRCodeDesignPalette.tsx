import { useEffect, useRef } from 'react'
import { useDisplayQRCode } from '../../../displaying'
import { QRCodeExample } from './constants'
import { DesignToken } from '@oleksii-pavlov/qr-codes'
import styles from './QRCodeDesignPalette.module.css'
import clsx from 'clsx'

interface QRCodeDesignPaletteProps {
  design: DesignToken
  isSelected?: boolean
}

export function QRCodeDesignPalette({ design, isSelected = false }: QRCodeDesignPaletteProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { display, config, updateConfig } = useDisplayQRCode({ paddingCells: 0 })

  function displayExample() {
    if (!containerRef.current) return
    display(containerRef.current, QRCodeExample)
  }

  useEffect(() => updateConfig({ design }), [design])
  useEffect(() => displayExample(), [config])

  return (
    <div className={clsx(styles.QRCodeDesignPalette, isSelected)}>
      <div className={styles.Container} ref={containerRef} />
    </div>
  )
}