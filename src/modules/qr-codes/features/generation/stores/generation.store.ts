import { create } from 'zustand'

export interface QRCodeGenerationState {
  step: number
}

export interface QRCodeGenerationActions {
  updateStep: (step: number) => void
  incrementStep: () => void
  decrementStep: () => void
}

export interface QRCodeGenerationStore extends QRCodeGenerationState, QRCodeGenerationActions {}

export const useQRCodeGenerationStore = create<QRCodeGenerationStore>(set => ({
  step: 0,
  updateStep: (step) => set({ step }),
  incrementStep: () => set(state => ({ ...state, step: state.step + 1 })),
  decrementStep: () => set(state => ({ ...state, step: state.step - 1 })),
}))

export const stepSelector = (store: QRCodeGenerationStore) => store.step
export const updateStepSelector = (store: QRCodeGenerationStore) => store.updateStep
export const incrementStepSelector = (store: QRCodeGenerationStore) => store.incrementStep
export const decrementStepSelector = (store: QRCodeGenerationStore) => store.decrementStep
