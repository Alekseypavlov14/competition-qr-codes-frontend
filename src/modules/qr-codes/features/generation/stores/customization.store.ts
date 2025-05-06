import { DesignToken, designClassic } from '@oleksii-pavlov/qr-codes'
import { WHITE_COLOR, BLACK_COLOR } from '@/shared/constants'
import { create } from 'zustand'

export interface QRCodeGenerationCustomizationState {
  design: DesignToken
  darkColor: string
  lightColor: string
}

export interface QRCodeGenerationCustomizationActions {
  updateDesign: (design: DesignToken) => void
  updateDarkColor: (darkColor: string) => void
  updateLightColor: (lightColor: string) => void
}

export interface QRCodeGenerationCustomizationStore
  extends QRCodeGenerationCustomizationState,
    QRCodeGenerationCustomizationActions {}

export const useQRCodeGenerationCustomizationStore = create<QRCodeGenerationCustomizationStore>(set => ({
  design: designClassic,
  darkColor: BLACK_COLOR,
  lightColor: WHITE_COLOR,

  updateDesign: (design) => set({ design }),
  updateDarkColor: (darkColor) => set({ darkColor }),
  updateLightColor: (lightColor) => set({ lightColor })
}))

export const designSelector = (store: QRCodeGenerationCustomizationStore) => store.design
export const darkColorSelector = (store: QRCodeGenerationCustomizationStore) => store.darkColor
export const lightColorSelector = (store: QRCodeGenerationCustomizationStore) => store.lightColor
export const updateDesignSelector = (store: QRCodeGenerationCustomizationStore) => store.updateDesign
export const updateDarkColorSelector = (store: QRCodeGenerationCustomizationStore) => store.updateDarkColor
export const updateLightColorSelector = (store: QRCodeGenerationCustomizationStore) => store.updateLightColor