import { defaultQRCodeDisplayConfig } from '../constants'
import { QRCodeDisplayConfig } from '../types/display-config'

export function normalizeConfig(...configs: QRCodeDisplayConfig[]): Required<QRCodeDisplayConfig> {
  return Object.assign({}, defaultQRCodeDisplayConfig, ...configs) as Required<QRCodeDisplayConfig>
}
