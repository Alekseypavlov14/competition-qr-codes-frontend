import { Printer, QRCodeContent } from '@oleksii-pavlov/qr-codes'
import { QRCodeDisplayConfig } from '../types/display-config'
import { normalizeConfig } from '../utils/normalize-config'
import { useState } from 'react'

export function useDisplayQRCode(initial: QRCodeDisplayConfig = {}) {
  const [config, setConfig] = useState<Required<QRCodeDisplayConfig>>(normalizeConfig(initial))
  
  const printer = new Printer()

  function updateConfig(newConfig: QRCodeDisplayConfig) {
    setConfig(normalizeConfig(config, newConfig))
  }

  function display(container: HTMLElement, content: QRCodeContent) {
    printer.setDarkColor(config.darkColor)
    printer.setLightColor(config.lightColor)
    printer.setDesign(config.design)
    printer.setPaddingCells(config.paddingCells)
    printer.setOutput(config.engine)  

    printer.injectContent(container, content)
  }

  return { config, updateConfig, display }
}
