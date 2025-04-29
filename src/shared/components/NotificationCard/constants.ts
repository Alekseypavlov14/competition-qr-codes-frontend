import { NotificationStatus } from '@/app/notifications'
import styles from './NotificationCard.module.css'

export const notificationStatusToModifierMapper: Record<NotificationStatus, string> = {
  success: styles.Success,
  failure: styles.Failure,
  warning: styles.Warning,
  info: styles.Info
}
