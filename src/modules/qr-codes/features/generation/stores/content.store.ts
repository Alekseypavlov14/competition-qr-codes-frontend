import { ERROR_CORRECTION_M, ErrorCorrection } from '@oleksii-pavlov/qr-codes'
import { create } from 'zustand'

export interface QRCodeGenerationContentState {
  content: string
  errorCorrection: ErrorCorrection
  analyticsEnabled: boolean
}

export interface QRCodeGenerationContentActions {
  updateContent: (content: string) => void
  updateErrorCorrection: (errorCorrection: ErrorCorrection) => void
  updateAnalyticsEnabled: (analyticsEnabled: boolean) => void
  reset: () => void
}

export interface QRCodeGenerationContentStore extends QRCodeGenerationContentState, QRCodeGenerationContentActions {}

export const useQRCodeGenerationContentStore = create<QRCodeGenerationContentStore>(set => ({
  content: '',
  errorCorrection: ERROR_CORRECTION_M,
  analyticsEnabled: true,

  updateContent: (content) => set({ content }),
  updateErrorCorrection: (errorCorrection) => set({ errorCorrection }),
  updateAnalyticsEnabled: (analyticsEnabled) => set({ analyticsEnabled }),
  
  reset: () => set({ content: '', errorCorrection: ERROR_CORRECTION_M, analyticsEnabled: true }),
}))

export const contentSelector = (store: QRCodeGenerationContentStore) => store.content
export const errorCorrectionSelector = (store: QRCodeGenerationContentStore) => store.errorCorrection
export const analyticsEnabledSelector = (store: QRCodeGenerationContentStore) => store.analyticsEnabled
export const updateContentSelector = (store: QRCodeGenerationContentStore) => store.updateContent
export const updateErrorCorrectionSelector = (store: QRCodeGenerationContentStore) => store.updateErrorCorrection
export const updateAnalyticsEnabledSelector = (store: QRCodeGenerationContentStore) => store.updateAnalyticsEnabled
export const resetContentSelector = (store: QRCodeGenerationContentStore) => store.reset
