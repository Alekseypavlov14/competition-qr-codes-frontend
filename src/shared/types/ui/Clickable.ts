import { MouseEvent } from 'react'

export interface Clickable<T = HTMLElement> {
  onClick?: (e: MouseEvent<T>) => void
}
