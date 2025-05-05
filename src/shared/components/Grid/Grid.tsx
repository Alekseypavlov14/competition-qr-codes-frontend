import { ComponentProps, CSSProperties } from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'

interface GridProps extends ComponentProps<'div'> {
  columns: number
}

export function Grid({ 
  className, 
  children, 
  columns, 
  ...props 
}: GridProps) {
  const injection: CSSProperties = {
    '--columns': columns
  } as CSSProperties

  return (
    <div 
      className={clsx(styles.Grid, className)}
      style={injection}
      {...props}
    >
      {children}
    </div>
  )
}