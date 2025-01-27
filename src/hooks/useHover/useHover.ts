import { useCallback, useEffect, useRef, useState } from 'react'

export function useHover<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(false)
  }, [])

  useEffect(() => {
    const abortController = new AbortController()

    const el = ref.current
    el?.addEventListener('mouseenter', handleMouseEnter, { signal: abortController.signal })
    el?.addEventListener('mouseleave', handleMouseLeave, { signal: abortController.signal })

    return () => {
      abortController.abort()
    }
  }, [handleMouseEnter, handleMouseLeave, ref])

  return { hovered, ref }
}
