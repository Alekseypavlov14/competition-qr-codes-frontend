import { ComponentProps } from 'react'
import { Customizable } from '@/shared/types/ui/Customizable'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends Customizable, ComponentProps<'input'> {
  block?: boolean
  invalid?: boolean
  disabled?: boolean
}

export function Input({ 
  classList = [],
  className,

  block, 
  invalid,
  disabled,
  
  ...props
}: InputProps) {
  const classNames = clsx(
    styles.Input,
    block && styles.InputBlock,
    invalid && styles.InputInvalid,
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