import { ComponentProps } from 'react'
import styles from './ErrorCorrectionPalette.module.css'
import clsx from 'clsx'

interface ErrorCorrectionPaletteProps extends ComponentProps<'div'> {
  isSelected?: boolean
}

export function ErrorCorrectionPalette({ className, children, isSelected, ...props }: ErrorCorrectionPaletteProps) {
  return (
    <div 
      className={clsx(styles.ErrorCorrectionPalette, className, isSelected && styles.Selected)}
      {...props}
    >
      {children}
    </div>
  )
}