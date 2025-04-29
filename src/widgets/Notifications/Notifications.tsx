import { notificationsSelector, useNotificationsStore } from '@/app/notifications'
import { NotificationCard } from '@/shared/components/NotificationCard'
import styles from './Notifications.module.css'

export function Notifications() {
  const notifications = useNotificationsStore(notificationsSelector)

  return (
    <div className={styles.Notifications}>
      {notifications.map((notification, index) => (
        <NotificationCard 
          message={notification.message}
          status={notification.status}
          key={index}  
        />
      ))}
    </div>
  )
}