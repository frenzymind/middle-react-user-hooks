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
    const el = ref.current
    el?.addEventListener('mouseenter', handleMouseEnter)
    el?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el?.removeEventListener('mouseenter', handleMouseEnter)
      el?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseEnter, handleMouseLeave])

  return { hovered, ref }
}
