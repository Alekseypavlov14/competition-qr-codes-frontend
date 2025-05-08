import { ERROR_CORRECTION_M, ErrorCorrection } from '@oleksii-pavlov/qr-codes'
import { create } from 'zustand'

export interface QRCodeGenerationContentState {
  content: string
  errorCorrection: ErrorCorrection
}

export interface QRCodeGenerationContentActions {
  updateContent: (content: string) => void
  updateErrorCorrection: (errorCorrection: ErrorCorrection) => void
  reset: () => void
}

export interface QRCodeGenerationContentStore extends QRCodeGenerationContentState, QRCodeGenerationContentActions {}

export const useQRCodeGenerationContentStore = create<QRCodeGenerationContentStore>(set => ({
  content: '',
  errorCorrection: ERROR_CORRECTION_M,
  analyticsEnabled: true,

  updateContent: (content) => set({ content }),
  updateErrorCorrection: (errorCorrection) => set({ errorCorrection }),
  
  reset: () => set({ content: '', errorCorrection: ERROR_CORRECTION_M }),
}))

export const contentSelector = (store: QRCodeGenerationContentStore) => store.content
export const errorCorrectionSelector = (store: QRCodeGenerationContentStore) => store.errorCorrection
export const updateContentSelector = (store: QRCodeGenerationContentStore) => store.updateContent
export const updateErrorCorrectionSelector = (store: QRCodeGenerationContentStore) => store.updateErrorCorrection
export const resetContentSelector = (store: QRCodeGenerationContentStore) => store.reset
