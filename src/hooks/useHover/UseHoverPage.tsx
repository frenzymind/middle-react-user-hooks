import { useHover } from './useHover'

function getRandomColor() {
  const colors = ['green', 'blue', 'purple', 'red', 'pink']
  return colors[Math.floor(Math.random() * colors.length)]
}

export function UseHoverPage() {
  const { hovered, ref } = useHover<HTMLDivElement>()

  const backgroundColor = hovered ? `${getRandomColor()}` : 'white'

  return (
    <div ref={ref} style={{ backgroundColor: backgroundColor, padding: '0.5em' }}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  )
}
