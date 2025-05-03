import { ScanEntity } from './scan.entity'
import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'

export interface QRCodeEntity extends Entity, QRCodeDTO {
  user_id: Id
  hash: string
  scans: ScanEntity[]
}

export interface QRCodeDTO {
  content: string
  date: string
}
