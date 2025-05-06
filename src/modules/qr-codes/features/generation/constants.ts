import { ERROR_CORRECTION_H, ERROR_CORRECTION_L, ERROR_CORRECTION_M, ERROR_CORRECTION_Q } from '@oleksii-pavlov/qr-codes'

export const STEPS_AMOUNT = 2

export const errorCorrectionPercentageMap = {
  [ERROR_CORRECTION_L]: 7,
  [ERROR_CORRECTION_M]: 15,
  [ERROR_CORRECTION_Q]: 25,
  [ERROR_CORRECTION_H]: 30,
} as const
