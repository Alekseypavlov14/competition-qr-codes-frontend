import { notificationStatusToModifierMapper } from './constants'
import { NotificationStatus } from '@/app/notifications'
import styles from './NotificationCard.module.css'
import clsx from 'clsx'

interface NotificationCardProps {
  status: NotificationStatus
  message: string
}

export function NotificationCard({ status, message }: NotificationCardProps) {
  const classNames = clsx(styles.NotificationCard, notificationStatusToModifierMapper[status])

  return (
    <div className={classNames}>
      {message}
    </div>
  )
}