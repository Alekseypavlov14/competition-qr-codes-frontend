import { MONTH_DAYS_AMOUNT, WEEK_DAYS_AMOUNT } from '@/shared/constants'
import { mapISOStringToDate } from '@/shared/utils/datetime'
import { QRCodeEntity } from '@/modules/qr-codes'
import { DateTime } from '@oleksii-pavlov/date-time'
import { Range } from '@oleksii-pavlov/ranges'

export function getQRCodeScanStatistics(qrCode: QRCodeEntity) {
  // get data
  const dates = qrCode.scans.map(scan => mapISOStringToDate(scan.date).getTime())
  const now = Date.now()

  // get today range
  const todayStart = new DateTime().normalizeDate().getTimeInMilliseconds()
  const todayEnd = now
  const todayRange = new Range({ min: todayStart, max: todayEnd })

  // get yesterday range
  const yesterdayStart = new DateTime().normalizeDate().getDateTimeBefore({ days: 1 }).getTimeInMilliseconds()
  const yesterdayEnd = new DateTime().normalizeDate().getTimeInMilliseconds()
  const yesterdayRange = new Range({ min: yesterdayStart, max: yesterdayEnd })

  // get week range
  const lastWeekStart = new DateTime().normalizeDate().getDateTimeBefore({ days: WEEK_DAYS_AMOUNT }).getTimeInMilliseconds()
  const lastWeekEnd = now
  const lastWeekRange = new Range({ min: lastWeekStart, max: lastWeekEnd })

  // get month range
  const lastMonthStart = new DateTime().normalizeDate().getDateTimeBefore({ days: MONTH_DAYS_AMOUNT }).getTimeInMilliseconds()
  const lastMonthEnd = now
  const lastMonthRange = new Range({ min: lastMonthStart, max: lastMonthEnd })

  // compute statistics
  const todayScans = dates.filter(date => todayRange.containsValue(date)).length
  const yesterdayScans = dates.filter(date => yesterdayRange.containsValue(date)).length
  const lastWeekScans = dates.filter(date => lastWeekRange.containsValue(date)).length
  const lastMonthScans = dates.filter(date => lastMonthRange.containsValue(date)).length

  // return statistics
  return ({ todayScans, yesterdayScans, lastWeekScans, lastMonthScans })
}
