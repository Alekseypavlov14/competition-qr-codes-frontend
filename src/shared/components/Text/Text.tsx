import { ComponentProps } from 'react'
import { Customizable } from '@/shared/types/ui/Customizable'
import styles from './Text.module.css'
import clsx from 'clsx'

interface TextProps extends Customizable, ComponentProps<'div'> {
  small?: boolean
}

export function Text({ 
  classList = [],
  className,
  children,

  small,
  
  ...props 
}: TextProps) {
  const classNames = clsx(
    styles.Text,
    small && styles.TextSmall,
    ...classList,
    className
  )

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}