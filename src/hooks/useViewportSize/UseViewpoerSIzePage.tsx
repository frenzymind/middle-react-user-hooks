import { useViewportSize } from './useViewportSize'

export function UseViewportSizePage() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
