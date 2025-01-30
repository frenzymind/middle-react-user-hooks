import { useCallback, useState } from 'react'
import { LocalStorageReturnValue, LocalStorageSetValue } from './types'

function getItem(key: string) {
  return localStorage.getItem(key)
}

export function useLocalStorage(key: string): [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void
    removeItem: () => void
  }
] {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => getItem(key))

  const setItem = useCallback(
    (value: LocalStorageSetValue): void => {
      localStorage.setItem(key, value)
      setValue(value)
    },
    [key]
  )

  const removeItem = useCallback((): void => {
    localStorage.removeItem(key)
    setValue(null)
  }, [key])

  return [value, { setItem, removeItem }]
}
