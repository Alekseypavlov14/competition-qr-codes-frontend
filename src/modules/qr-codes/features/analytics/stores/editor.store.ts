import { designClassic, ERROR_CORRECTION_M, ErrorCorrection } from '@oleksii-pavlov/qr-codes'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { DesignToken } from '@oleksii-pavlov/qr-codes'
import { create } from 'zustand'

export interface EditorState {
  errorCorrection: ErrorCorrection
  darkColor: string
  lightColor: string
  design: DesignToken
}

export interface EditorActions {
  updateErrorCorrection: (errorCorrection: ErrorCorrection) => void
  updateDarkColor: (darkColor: string) => void
  updateLightColor: (lightColor: string) => void
  updateDesign: (design: DesignToken) => void
  reset: () => void
}

export interface EditorStore extends EditorState, EditorActions {}

export const useEditorStore = create<EditorStore>(set => ({
  errorCorrection: ERROR_CORRECTION_M,
  darkColor: BLACK_COLOR,
  lightColor: WHITE_COLOR,
  design: designClassic,

  updateErrorCorrection: (errorCorrection) => set({ errorCorrection }),
  updateDarkColor: (darkColor) => set({ darkColor }),
  updateLightColor: (lightColor) => set({ lightColor }),
  updateDesign: (design) => set({ design }),
  
  reset: () => set({
    errorCorrection: ERROR_CORRECTION_M,
    darkColor: BLACK_COLOR,
    lightColor: WHITE_COLOR,
    design: designClassic,
  }),
}))

export const errorCorrectionSelector = (store: EditorStore) => store.errorCorrection
export const darkColorSelector = (store: EditorStore) => store.darkColor
export const lightColorSelector = (store: EditorStore) => store.lightColor
export const designSelector = (store: EditorStore) => store.design

export const updateErrorCorrectionSelector = (store: EditorStore) => store.updateErrorCorrection
export const updateDarkColorSelector = (store: EditorStore) => store.updateDarkColor
export const updateLightColorSelector = (store: EditorStore) => store.updateLightColor
export const updateDesignSelector = (store: EditorStore) => store.updateDesign
export const resetEditorSelector = (store: EditorStore) => store.reset
