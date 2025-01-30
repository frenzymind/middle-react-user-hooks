import { useCallback, useRef, useState } from 'react'

export function useToggle(options: string[] = []): [value: string | boolean, toggle: () => void] {
  const [currentOptions] = useState(() => (options.length >= 2 ? options : [true, false]))
  const [currentValue, setCurrentValue] = useState(() => currentOptions[0])
  const indexRef = useRef(0)

  const toggle = useCallback(() => {
    const newIndex = indexRef.current < currentOptions.length - 1 ? indexRef.current + 1 : 0
    indexRef.current = newIndex

    setCurrentValue(currentOptions[newIndex])
  }, [currentOptions])

  return [currentValue, toggle]
}
