import { Notification } from './notification'
import { create } from 'zustand'

export interface NotificationsState {
  notifications: Notification[]
}

export interface NotificationsActions {
  pushNotification: (notification: Notification) => void
  popNotification: () => void 
}

export interface NotificationsStore extends NotificationsState, NotificationsActions {}

export const useNotificationsStore = create<NotificationsStore>(set => ({
  notifications: [],

  pushNotification: (notification: Notification) => set(state => ({
    notifications: [...state.notifications, notification],
  })),

  popNotification: () => set(state => ({ notifications: state.notifications.slice(1) }))
}))

export const notificationsSelector = (store: NotificationsStore) => store.notifications
export const pushNotificationSelector = (store: NotificationsStore) => store.pushNotification
export const popNotificationsSelector = (store: NotificationsStore) => store.popNotification
