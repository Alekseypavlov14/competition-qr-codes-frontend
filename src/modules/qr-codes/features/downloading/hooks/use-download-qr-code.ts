import { PrinterConfig, DownloaderConfig, FileType, Downloader, Printer, QRCodeContent } from '@oleksii-pavlov/qr-codes'
import { useEffect, useRef, useState } from 'react'
import { mapFileTypeToPrinterOutput } from '../constants'

export function useDownloadQRCode() {
  const [printerConfig, setPrinterConfig] = useState<Partial<PrinterConfig>>({})
  const [downloaderConfig, setDownloaderConfig] = useState<Partial<DownloaderConfig>>({})

  // get module classes
  const printer = useRef<Printer>(new Printer())
  const downloader = useRef<Downloader>(new Downloader())

  // connect to state
  useEffect(() => {
    if (printerConfig.darkColor) printer.current.setDarkColor(printerConfig.darkColor)
    if (printerConfig.lightColor) printer.current.setLightColor(printerConfig.lightColor)

    if (printerConfig.output) printer.current.setOutput(printerConfig.output)
    if (printerConfig.paddingCells) printer.current.setPaddingCells(printerConfig.paddingCells)
    if (printerConfig.design) printer.current.setDesign(printerConfig.design)
  }, [printerConfig])

  useEffect(() => {
    if (downloaderConfig.fileName) downloader.current.setFileName(downloaderConfig.fileName)
    if (downloaderConfig.fileType) downloader.current.setFileType(downloaderConfig.fileType)
  }, [downloaderConfig])

  // add handlers
  function updateFileName(name: string) {
    setDownloaderConfig(config => ({ ...config, fileName: name }))
  }
  function updatePrinterConfig(config: Partial<PrinterConfig>) {
    setPrinterConfig(oldConfig => ({ ...oldConfig, ...config }))
  }

  function download(content: QRCodeContent, fileType: FileType) {
    printer.current.setOutput(mapFileTypeToPrinterOutput[fileType])
    const element = printer.current.print(content)

    downloader.current.setFileType(fileType)
    downloader.current.download(element)
  }

  return ({ updateFileName, updatePrinterConfig, download })
}
