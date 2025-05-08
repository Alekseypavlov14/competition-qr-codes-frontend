import { canvasEngine, EngineToken, FileType, svgEngine } from '@oleksii-pavlov/qr-codes'

export const mapFileTypeToPrinterOutput: Record<FileType, EngineToken> = {
  png: canvasEngine,
  jpeg: canvasEngine,
  webp: canvasEngine,
  svg: svgEngine,
}
