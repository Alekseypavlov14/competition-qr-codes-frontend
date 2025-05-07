import { create } from 'zustand'

export interface QRCodeResultState {
  hash: string
}

export interface QRCodeResultActions {
  updateHash: (hash: string) => void
  reset: () => void
}

export interface QRCodeResultStore extends QRCodeResultState, QRCodeResultActions {}

export const useQRCodeResultStore = create<QRCodeResultStore>(set => ({
  hash: '', 

  updateHash: (hash) => set({ hash }),

  reset: () => set({ hash: '' }),
}))

export const hashSelector = (store: QRCodeResultStore) => store.hash
export const updateHashSelector = (store: QRCodeResultStore) => store.updateHash
export const resetResultSelector = (store: QRCodeResultStore) => store.reset