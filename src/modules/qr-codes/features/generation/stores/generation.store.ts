import { create } from 'zustand'

export interface QRCodeGenerationState {
  step: number
}

export interface QRCodeGenerationActions {
  updateStep: (step: number) => void
}

export interface QRCodeGenerationStore extends QRCodeGenerationState, QRCodeGenerationActions {}

export const useQRCodeGenerationStore = create<QRCodeGenerationStore>(set => ({
  step: 0,
  updateStep: (step) => set({ step })
}))

export const stepSelector = (store: QRCodeGenerationStore) => store.step
export const updateStepSelector = (store: QRCodeGenerationStore) => store.updateStep
