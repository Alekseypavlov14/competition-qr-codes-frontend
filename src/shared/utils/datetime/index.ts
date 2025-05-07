export function mapDateToISOString(date: Date): string {
  return date.toISOString()
}

export function mapISOStringToDate(iso: string): Date {
  return new Date(iso)
}