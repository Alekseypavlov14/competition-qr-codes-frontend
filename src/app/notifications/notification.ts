export type NotificationStatus = 'success' | 'failure' | 'warning' | 'info'

export const successNotificationStatus: NotificationStatus = 'success'
export const failureNotificationStatus: NotificationStatus = 'failure'
export const warningNotificationStatus: NotificationStatus = 'warning'
export const infoNotificationStatus: NotificationStatus = 'info'

export interface Notification {
  status: NotificationStatus
  message: string
}
