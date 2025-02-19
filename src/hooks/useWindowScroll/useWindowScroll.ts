import { useEffect, useState } from 'react'
import { useWindowEvent } from '../useViewportSize/useViewportSize'

type IPosition = {
  x: number
  y: number
}

function getScrollPosition(): IPosition {
  return { x: window.scrollX, y: window.scrollY }
}

function scrollTo({ x, y }: Partial<IPosition>) {
  const scrollOptions: ScrollToOptions = { behavior: 'smooth' }

  scrollOptions.left = x
  scrollOptions.top = y

  window.scrollTo(scrollOptions)
}

export function useWindowScroll(): [IPosition, typeof scrollTo] {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 })

  useWindowEvent('scroll', () => setPosition(getScrollPosition()), false)

  useEffect(() => {
    setPosition(getScrollPosition())
  }, [])

  return [position, scrollTo]
}
