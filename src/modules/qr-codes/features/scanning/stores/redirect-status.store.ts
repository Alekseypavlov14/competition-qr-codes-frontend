import { redirectStatusPending } from '../constants'
import { RedirectStatus } from '../types/redirect-status'
import { create } from 'zustand'

export interface RedirectStatusState {
  status: RedirectStatus
}

export interface RedirectStatusActions {
  updateStatus: (status: RedirectStatus) => void
  reset: () => void
}

export interface RedirectStatusStore extends RedirectStatusState, RedirectStatusActions {}

export const useRedirectStatusStore = create<RedirectStatusStore>(set => ({
  status: redirectStatusPending,

  updateStatus: (status) => set({ status }),
  reset: () => set({ status: redirectStatusPending }),
}))

export const statusSelector = (store: RedirectStatusStore) => store.status
export const updateStatusSelector = (store: RedirectStatusStore) => store.updateStatus
export const resetStatusSelector = (store: RedirectStatusStore) => store.reset
