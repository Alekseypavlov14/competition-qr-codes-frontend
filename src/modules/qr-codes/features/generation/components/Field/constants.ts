import styles from './Field.module.css'

export type FieldDirection = 'horizontal' | 'vertical'

export const fieldDirectionHorizontal: FieldDirection = 'horizontal'
export const fieldDirectionVertical: FieldDirection = 'vertical'

export const fieldDirectionMapper: Record<FieldDirection, string> = {
  horizontal: styles.Horizontal,
  vertical: styles.Vertical
}
