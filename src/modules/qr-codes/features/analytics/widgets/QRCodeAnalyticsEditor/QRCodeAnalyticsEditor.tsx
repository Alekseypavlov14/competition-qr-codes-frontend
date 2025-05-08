import styles from './QRCodeAnalyticsEditor.module.css'

export function QRCodeAnalyticsEditor() {
  return (
    <div className={styles.QRCodeAnalyticsEditor}>
      <div className={styles.Preview}></div>

      <div className={styles.Form}></div>

      <div className={styles.Download}></div>
    </div>
  )
}