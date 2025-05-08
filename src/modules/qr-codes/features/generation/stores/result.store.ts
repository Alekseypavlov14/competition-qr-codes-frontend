import { ResultLoadingState, resultLoadingStateNone } from '../constants'
import { create } from 'zustand'

export interface QRCodeResultState {
  hash: string
  loading: ResultLoadingState
}

export interface QRCodeResultActions {
  updateHash: (hash: string) => void
  updateLoading: (state: ResultLoadingState) => void
  reset: () => void
}

export interface QRCodeResultStore extends QRCodeResultState, QRCodeResultActions {}

export const useQRCodeResultStore = create<QRCodeResultStore>(set => ({
  hash: '',
  loading: resultLoadingStateNone,

  updateHash: (hash) => set({ hash }),
  updateLoading: (state) => set({ loading: state }),

  reset: () => set({ hash: '', loading: resultLoadingStateNone }),
}))

export const hashSelector = (store: QRCodeResultStore) => store.hash
export const loadingSelector = (store: QRCodeResultStore) => store.loading
export const updateHashSelector = (store: QRCodeResultStore) => store.updateHash
export const updateLoadingSelector = (store: QRCodeResultStore) => store.updateLoading
export const resetResultSelector = (store: QRCodeResultStore) => store.reset
