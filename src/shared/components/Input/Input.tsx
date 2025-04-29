import { ComponentProps } from 'react'
import { Customizable } from '@/shared/types/ui/Customizable'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends Customizable, ComponentProps<'input'> {
  block?: boolean
  disabled?: boolean
}

export function Input({ 
  classList = [],
  className,

  block, 
  disabled,
  
  ...props
}: InputProps) {
  const classNames = clsx(
    styles.Input,
    block && styles.InputBlock,
    disabled && styles.InputDisabled,
    ...classList,
    className
  )
  
  return (
    <div className={classNames}>
      <input 
        {...props} 
        className={styles.InputControl} 
        disabled={disabled}
      />    
    </div>
  )
}