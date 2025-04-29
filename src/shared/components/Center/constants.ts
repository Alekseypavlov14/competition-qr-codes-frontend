import styles from './Center.module.css'

export type CenterGapSize = 'small' | 'medium' | 'large'

export const centerGapSizeSmall: CenterGapSize = 'small'
export const centerGapSizeMedium: CenterGapSize = 'medium'
export const centerGapSizeLarge: CenterGapSize = 'large'

export const centerGapSizeModifier: Record<CenterGapSize, string> = {
  small: styles.GapSmall,
  medium: styles.GapMedium,
  large: styles.GapLarge,
}
