import { ChangeEvent, ComponentProps, useState } from 'react'
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
  const [internalChecked, setInternalChecked] = useState(Boolean(checked))

  function updateCheckedHandler(e: ChangeEvent<HTMLInputElement>) {
    setInternalChecked(e.target.checked)
    onSwitch(e.target.checked)
    onChange(e)
  }

  return (
    <label className={clsx(styles.Switch, className)}>
      <input
        type="checkbox"
        checked={internalChecked}
        onChange={updateCheckedHandler}
        {...props}
      />
      <span className={styles.Track}>
        <span className={styles.Handle} />
      </span>
    </label>
  )
}
