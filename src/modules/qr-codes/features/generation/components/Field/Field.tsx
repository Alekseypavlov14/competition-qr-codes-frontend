import { FieldDirection, fieldDirectionMapper, fieldDirectionVertical } from './constants'
import { ComponentProps } from 'react'
import styles from './Field.module.css'
import clsx from 'clsx'

interface FieldProps extends ComponentProps<'div'> {
  direction?: FieldDirection
}

export function Field({ 
  direction = fieldDirectionVertical, 
  className, 
  children, 
  ...props 
}: FieldProps) {
  return (
    <div 
      className={clsx(styles.Field, className, fieldDirectionMapper[direction])}
      {...props}
    >
      {children}
    </div>
  )
}