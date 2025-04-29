import { ScanEntity } from './scan.entity'
import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'

export interface QRCodeEntity extends Entity, QRCodeDTO {}

export interface QRCodeDTO {
  user_id: Id
  content: string
  hash: string
  scans: ScanEntity[]
  date: string
}
