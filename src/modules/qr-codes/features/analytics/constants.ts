import { QRCodeLoadingState } from './types/qr-code-loading-status'
import { RedirectStatus } from './types/redirect-status'

export const redirectStatusSuccess: RedirectStatus = 'success'
export const redirectStatusFail: RedirectStatus = 'fail'
export const redirectStatusPending: RedirectStatus = 'pending'

export const qrCodeLoadingStatePending: QRCodeLoadingState = 'pending'
export const qrCodeLoadingStateSuccess: QRCodeLoadingState = 'success'
export const qrCodeLoadingStateFailure: QRCodeLoadingState = 'failure'