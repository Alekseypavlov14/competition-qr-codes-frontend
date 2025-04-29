import { create } from 'zustand'

export interface AuthFormState {
  email: string
  password: string
}

interface AuthFormActions {
  updateEmail: (email: string) => void
  updatePassword: (password: string) => void
  reset: () => void
}

export interface AuthFormStore extends AuthFormState, AuthFormActions {}

export const useAuthFormStore = create<AuthFormStore>(set => ({
  email: '',
  password: '',

  updateEmail: (email: string) => set({ email }),
  updatePassword: (password: string) => set({ password }),

  reset: () => set({ email: '', password: '' })
}))

export const emailSelector = (store: AuthFormStore) => store.email
export const passwordSelector = (store: AuthFormStore) => store.password
export const updateEmailSelector = (store: AuthFormStore) => store.updateEmail
export const updatePasswordSelector = (store: AuthFormStore) => store.updatePassword
export const resetSelector = (store: AuthFormStore) => store.reset
