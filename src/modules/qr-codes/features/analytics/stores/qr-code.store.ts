import { qrCodeLoadingStatePending } from '../constants'
import { QRCodeLoadingState } from '../types/qr-code-loading-status'
import { QRCodeEntity } from '@/modules/qr-codes'
import { Nullable } from '@/shared/types/nullable'
import { create } from 'zustand'

export interface QRCodeStoreState {
  qrCode: Nullable<QRCodeEntity>
  loading: QRCodeLoadingState
}

export interface QRCodeStoreActions {
  updateQRCode: (qrCode: Nullable<QRCodeEntity>) => void
  updateLoading: (state: QRCodeLoadingState) => void
  reset: () => void
}

export interface QRCodeStore extends QRCodeStoreState, QRCodeStoreActions {}

export const useQRCodeStore = create<QRCodeStore>(set => ({
  qrCode: null, 
  loading: qrCodeLoadingStatePending,

  updateQRCode: (qrCode) => set({ qrCode }),
  updateLoading: (state) => set({ loading: state }),
  reset: () => set({ qrCode: null, loading: qrCodeLoadingStatePending }),
}))

export const qrCodeSelector = (store: QRCodeStore) => store.qrCode
export const loadingSelector = (store: QRCodeStore) => store.loading
export const updateQRCodeSelector = (store: QRCodeStore) => store.updateQRCode
export const updateLoadingSelector = (store: QRCodeStore) => store.updateLoading
export const resetQRCodeSelector = (store: QRCodeStore) => store.reset
