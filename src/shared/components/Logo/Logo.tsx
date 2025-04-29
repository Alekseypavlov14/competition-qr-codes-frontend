import { Customizable } from '@/shared/types/ui/Customizable'
import { Clickable } from '@/shared/types/ui/Clickable'
import styles from './Logo.module.css'
import clsx from 'clsx'

interface LogoProps extends Customizable, Clickable {}

export function Logo({ 
  classList = [],
  onClick,
}: LogoProps) {
  const classNames = clsx(
    styles.Logo,
    ...classList
  )

  return (
    <a 
      className={classNames} 
      onClick={onClick}
    >
      <span>QR</span>Coder
    </a>
  )
}