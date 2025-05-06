import styles from './GridFallback.module.css'

export type GridFallbackPadding = 'small' | 'medium' | 'big'

export const gridFallbackPaddingSmall: GridFallbackPadding = 'small'
export const gridFallbackPaddingMedium: GridFallbackPadding = 'medium'
export const gridFallbackPaddingBig: GridFallbackPadding = 'big'

export const gridFallbackPaddingMapper: Record<GridFallbackPadding, string> = {
  small: styles.PaddingSmall,
  medium: styles.PaddingMedium,
  big: styles.PaddingBig
}
