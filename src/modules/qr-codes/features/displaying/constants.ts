import { canvasEngine, designClassic } from '@oleksii-pavlov/qr-codes'
import { BLACK_COLOR, WHITE_COLOR } from '@/shared/constants'
import { QRCodeDisplayConfig } from './types/display-config'

export const defaultPaddingCells = 3

export const defaultQRCodeDisplayConfig: Required<QRCodeDisplayConfig> = {
  lightColor: WHITE_COLOR,
  darkColor: BLACK_COLOR,

  design: designClassic,
  paddingCells: defaultPaddingCells,

  engine: canvasEngine
}