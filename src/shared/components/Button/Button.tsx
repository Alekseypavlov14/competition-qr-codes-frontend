import { ComponentProps } from 'react'
import { Customizable } from '@/shared/types/ui/Customizable'
import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps extends Customizable, ComponentProps<'button'> {
  withIcon?: boolean
  centered?: boolean
  filled?: boolean
  outlined?: boolean
  block?: boolean
}

export function Button({ 
  classList = [],
  className,
  children,

  withIcon,
  centered,
  filled, 
  outlined,
  block,

  ...props
 }: ButtonProps) {
  const classNames = clsx(
    styles.Button,
    withIcon && styles.ButtonWithIcon,
    centered && styles.ButtonCentered,
    filled && styles.ButtonFilled,
    outlined && styles.ButtonOutlined,
    block && styles.ButtonBlock,
    className,
    ...classList,
  )

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}