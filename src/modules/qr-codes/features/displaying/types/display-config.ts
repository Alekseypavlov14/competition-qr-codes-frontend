import { DesignToken, EngineToken } from '@oleksii-pavlov/qr-codes'

export interface QRCodeDisplayConfig {
  darkColor?: string
  lightColor?: string

  design?: DesignToken
  paddingCells?: number

  engine?: EngineToken
}
