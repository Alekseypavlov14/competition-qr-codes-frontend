import { popNotificationsSelector, pushNotificationSelector, useNotificationsStore } from './store'
import { failureNotificationStatus, infoNotificationStatus, Notification, successNotificationStatus, warningNotificationStatus } from './notification'
import { notificationsDelay } from './constants'

export function useNotifications() {
  const pushNotification = useNotificationsStore(pushNotificationSelector)
  const popNotification = useNotificationsStore(popNotificationsSelector)
  
  function success(message: string) {
    const notification: Notification = { 
      status: successNotificationStatus,
      message: message
    }

    pushNotification(notification)
    setTimeout(popNotification, notificationsDelay)
  }

  function failure(message: string) {
    const notification: Notification = { 
      status: failureNotificationStatus,
      message: message
    }

    pushNotification(notification)
    setTimeout(popNotification, notificationsDelay)
  }

  function warning(message: string) {
    const notification: Notification = { 
      status: warningNotificationStatus,
      message: message
    }
  
    pushNotification(notification)
    setTimeout(popNotification, notificationsDelay)
  }

  function info(message: string) {
    const notification: Notification = { 
      status: infoNotificationStatus,
      message: message
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
