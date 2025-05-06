import { useCallback, useRef } from 'react'
import { Function } from '../types/function'

export const defaultDebounceDelay = 500

export function useDebounce<T extends Function>(callback: T, delay: number = defaultDebounceDelay) {
  const timeoutRef = useRef<number>(delay)

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => callback(...args), delay) as unknown as number
    },
    [callback, delay]
  )
}
