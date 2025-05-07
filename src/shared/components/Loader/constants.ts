import styles from './Loader.module.css'

export type LoaderSize = 'small' | 'medium' | 'big'
export type LoaderColor = 'base' | 'primary'

export const loaderSizeSmall: LoaderSize = 'small'
export const loaderSizeMedium: LoaderSize = 'medium'
export const loaderSizeBig: LoaderSize = 'big'

export const loaderColorBase: LoaderColor = 'base'
export const loaderColorPrimary: LoaderColor = 'primary'

export const loaderSizeMapper: Record<LoaderSize, string> = {
  [loaderSizeSmall]: styles.Small,
  [loaderSizeMedium]: styles.Medium,
  [loaderSizeBig]: styles.Big
}

export const loaderColorMapper: Record<LoaderColor, string> = {
  [loaderColorBase]: styles.Base,
  [loaderColorPrimary]: styles.Primary
}
