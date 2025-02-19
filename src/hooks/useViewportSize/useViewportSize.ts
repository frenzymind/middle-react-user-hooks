import { useCallback, useEffect, useState } from 'react'

export function useWindowEvent(
  type: keyof WindowEventMap,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options)
      return () => window.removeEventListener(type, listener, options)
    }
  }, [type, listener])
}

export function useViewportSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const setWindowSize = useCallback(() => {
    setSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 })
  }, [])

  useWindowEvent('resize', setWindowSize, false)

  useEffect(setWindowSize, [])

  return size
}
