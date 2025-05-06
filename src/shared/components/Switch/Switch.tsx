import { ChangeEvent, ComponentProps } from 'react'
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
  function updateCheckedHandler(e: ChangeEvent<HTMLInputElement>) {
    onSwitch(e.target.checked)
    onChange(e)
  }

  return (
    <label className={clsx(styles.Switch, className)}>
      <input
        type="checkbox"
        checked={Boolean(checked)}
        onChange={updateCheckedHandler}
        {...props}
      />
      <span className={styles.Track}>
        <span className={styles.Handle} />
      </span>
    </label>
  )
}
