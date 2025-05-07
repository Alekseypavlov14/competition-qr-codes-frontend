import { LoaderColor, loaderColorBase, loaderColorMapper, LoaderSize, loaderSizeMapper, loaderSizeMedium } from './constants'
import clsx from 'clsx'
import styles from './Loader.module.css'

interface LoaderProps {
  size?: LoaderSize
  color?: LoaderColor
  className?: string
}

export function Loader({
  size = loaderSizeMedium,
  color = loaderColorBase,
  className
}: LoaderProps) {
  const classNames = clsx(styles.Loader, loaderSizeMapper[size], loaderColorMapper[color], className)

  return (
    <div className={classNames} />
  )
}
