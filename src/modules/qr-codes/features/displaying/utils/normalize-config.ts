import { defaultQRCodeDisplayConfig } from '../constants'
import { QRCodeDisplayConfig } from '../types/display-config'

export function normalizeConfig(config: QRCodeDisplayConfig): Required<QRCodeDisplayConfig> {
  return Object.assign({}, defaultQRCodeDisplayConfig, config) as Required<QRCodeDisplayConfig>
}
