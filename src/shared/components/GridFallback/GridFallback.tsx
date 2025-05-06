import { GridFallbackPadding, gridFallbackPaddingMapper, gridFallbackPaddingMedium } from './constants'
import { ComponentProps } from 'react'
import styles from './GridFallback.module.css'
import clsx from 'clsx'

interface GridFallbackProps extends ComponentProps<'div'> {
  padding?: GridFallbackPadding
}

export function GridFallback({ 
  padding = gridFallbackPaddingMedium, 
  className, 
  children, 
  ...props 
}: GridFallbackProps) {
  return (
    <div 
      className={clsx(styles.GridFallback, className, gridFallbackPaddingMapper[padding])}
      {...props}
    >
      {children}
    </div>
  )
}