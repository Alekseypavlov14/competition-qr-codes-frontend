import { ChangeEvent, useState } from 'react'
import { clsx } from 'clsx'
import styles from './Switch.module.css'

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function Switch({ 
  checked = false, 
  onChange = () => {}, 
  className 
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(checked)

  function updateCheckedHandler(e: ChangeEvent<HTMLInputElement>) {
    setInternalChecked(e.target.checked)
    onChange(e.target.checked)
  }

  return (
    <label className={clsx(styles.Switch, className)}>
      <input
        type="checkbox"
        checked={internalChecked}
        onChange={updateCheckedHandler}
      />
      <span className={styles.Track}>
        <span className={styles.Handle} />
      </span>
    </label>
  )
}
