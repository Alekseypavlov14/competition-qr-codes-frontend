import { CenterGapSize, centerGapSizeModifier, centerGapSizeSmall } from './constants'
import { ComponentProps } from 'react'
import styles from './Center.module.css'
import clsx from 'clsx'

interface CenterProps extends ComponentProps<'div'> {
  gap?: CenterGapSize
}

export function Center({ className, gap = centerGapSizeSmall, ...props }: CenterProps) {
  const classNames = clsx(styles.Center, centerGapSizeModifier[gap], className)

  return (
    <div className={classNames} {...props} />
  )
}