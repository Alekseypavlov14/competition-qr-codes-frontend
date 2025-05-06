import { Printer, QRCodeContent } from '@oleksii-pavlov/qr-codes'
import { QRCodeDisplayConfig } from '../types/display-config'
import { RefObject, useState } from 'react'
import { normalizeConfig } from '../utils/normalize-config'
import { Nullable } from '@/shared/types/nullable'

export function useDisplayQRCode(initial: QRCodeDisplayConfig = {}) {
  const [config, setConfig] = useState<Required<QRCodeDisplayConfig>>(normalizeConfig(initial))
  
  const printer = new Printer()

  function updateConfig(config: QRCodeDisplayConfig) {
    setConfig(normalizeConfig(config))
  }

  function display(root: RefObject<Nullable<HTMLElement>>, content: QRCodeContent) {
    const container = root.current
    if (!container) return

    printer.setDarkColor(config.darkColor)
    printer.setLightColor(config.lightColor)
    printer.setDesign(config.design)
    printer.setPaddingCells(config.paddingCells)
    printer.setOutput(config.engine)  

    printer.print(content)(container)
  }

  return { updateConfig, display }
}
