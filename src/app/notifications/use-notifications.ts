import { failureNotificationStatus, infoNotificationStatus, Notification, NotificationStatus, successNotificationStatus, warningNotificationStatus } from './notification'
import { popNotificationsSelector, pushNotificationSelector, useNotificationsStore } from './store'
import { notificationsDelay } from './constants'

export function useNotifications() {
  const pushNotification = useNotificationsStore(pushNotificationSelector)
  const popNotification = useNotificationsStore(popNotificationsSelector)
  
  function success(message: string) {
    createNotification(message, successNotificationStatus)
  }

  function failure(message: string) {
    createNotification(message, failureNotificationStatus)
  }

  function warning(message: string) {
    createNotification(message, warningNotificationStatus)
  }

  function info(message: string) {
    createNotification(message, infoNotificationStatus)
  }

  function createNotification(message: string, status: NotificationStatus) {
    const notification: Notification = { 
      message: message,
      status: status,
    }
  
    pushNotification(notification)
    setTimeout(popNotification, notificationsDelay)
  }

  return ({
    success, 
    failure,
    warning, 
    info
  })
}
