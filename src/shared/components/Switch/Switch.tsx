import { ChangeEvent, ComponentProps, useEffect, useRef } from 'react'
import { clsx } from 'clsx'
import styles from './Switch.module.css'

interface SwitchProps extends ComponentProps<'input'> {
  onSwitch?: (checked: boolean) => void
}

export function Switch({ 
  checked,
  onSwitch = () => {},
  onChange = () => {}, 
  className,
  ...props 
}: SwitchProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  function updateCheckedHandler(e: ChangeEvent<HTMLInputElement>) {
    onSwitch(e.target.checked)
    onChange(e)
  }

  useEffect(() => {
    if (!checkboxRef.current) return

    // explicit setting
    checkboxRef.current.checked = Boolean(checked)
  }, [checked])

  return (
    <label className={clsx(styles.Switch, className)}>
      <input
        type="checkbox"
        checked={Boolean(checked)}
        onChange={updateCheckedHandler}
        ref={checkboxRef}
        {...props}
      />
      <span className={styles.Track}>
        <span className={styles.Handle} />
      </span>
    </label>
  )
}
