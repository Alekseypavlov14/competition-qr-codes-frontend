import { ComponentProps } from 'react'
import styles from './QRCodeDesignPaletteList.module.css'
import clsx from 'clsx'

interface QRCodeDesignPaletteListProps extends ComponentProps<'div'> {}

export function QRCodeDesignPaletteList({ className, children, ...props }: QRCodeDesignPaletteListProps) {
  return (
    <div 
      className={clsx(styles.QRCodeDesignPaletteList, className)}
      {...props}
    >
      {children}
    </div>
  )
}