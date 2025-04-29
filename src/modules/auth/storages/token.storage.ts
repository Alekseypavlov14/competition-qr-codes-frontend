import { LocalStorage } from '@oleksii-pavlov/storages'
import { Token } from '../types/token'

export const tokenStorage = new LocalStorage<Token>('auth/token')
