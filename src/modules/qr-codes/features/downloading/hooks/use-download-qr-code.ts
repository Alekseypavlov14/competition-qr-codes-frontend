import { PrinterConfig, DownloaderConfig, FileType, Downloader, Printer, QRCodeContent } from '@oleksii-pavlov/qr-codes'
import { useEffect, useState } from 'react'
import { mapFileTypeToPrinterOutput } from '../constants'

export function useDownloadQRCode() {
  const [printerConfig, setPrinterConfig] = useState<Partial<PrinterConfig>>({})
  const [downloaderConfig, setDownloaderConfig] = useState<Partial<DownloaderConfig>>({})

  // get module classes
  const printer = new Printer()
  const downloader = new Downloader()

  // connect to state
  useEffect(() => {
    if (printerConfig.darkColor) printer.setDarkColor(printerConfig.darkColor)
    if (printerConfig.lightColor) printer.setLightColor(printerConfig.lightColor)

    if (printerConfig.output) printer.setOutput(printerConfig.output)
    if (printerConfig.paddingCells) printer.setPaddingCells(printerConfig.paddingCells)
    if (printerConfig.design) printer.setDesign(printerConfig.design)
  }, [printerConfig])

  useEffect(() => {
    if (downloaderConfig.fileName) downloader.setFileName(downloaderConfig.fileName)
    if (downloaderConfig.fileType) downloader.setFileType(downloaderConfig.fileType)
  }, [downloaderConfig])

  // add handlers
  function updateFileName(name: string) {
    setDownloaderConfig(config => ({ ...config, fileName: name }))
  }
  function updatePrinterConfig(config: Partial<PrinterConfig>) {
    setPrinterConfig(oldConfig => ({ ...oldConfig, ...config }))
  }

  function download(content: QRCodeContent, fileType: FileType) {
    printer.setOutput(mapFileTypeToPrinterOutput[fileType])
    const element = printer.print(content)

    downloader.setFileType(fileType)
    downloader.download(element)
  }

  return ({ updateFileName, updatePrinterConfig, download })
}
