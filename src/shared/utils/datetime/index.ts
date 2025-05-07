import { DateFormatter } from '@oleksii-pavlov/date-time'

export function mapDateToISOString(date: Date): string {
  return date.toISOString()
}

export function mapISOStringToDate(iso: string): Date {
  return new Date(iso)
}

export function formatDateFull(date: number): string {
  const dateFormatter = new DateFormatter()
  const format = dateFormatter.createFormatter('DD MMMM YYYY')
  return format(date)
}
