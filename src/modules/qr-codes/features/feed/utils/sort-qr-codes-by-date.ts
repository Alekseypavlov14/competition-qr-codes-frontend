import { mapISOStringToDate } from '@/shared/utils/datetime'
import { QRCodeEntity } from '@/modules/qr-codes'
import { Collection } from '@oleksii-pavlov/collections'

export function sortQRCodesByDate(qrCodes: QRCodeEntity[]) {
  return new Collection(qrCodes).sortDescendingBy(qrCode => {
    return mapISOStringToDate(qrCode.date).getTime()
  }).getItems()
}
