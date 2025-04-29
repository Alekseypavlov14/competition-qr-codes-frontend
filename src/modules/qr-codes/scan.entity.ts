import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'

export interface ScanEntity extends Entity, ScanDTO {}

export interface ScanDTO {
  date: string
  qr_code_id: Id
}
