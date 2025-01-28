import { useWindowScroll } from './useWindowScroll'

export function UseWindowScrollPage() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div style={{ height: '3000px', width: '3000px' }}>
      <div style={{ position: 'fixed' }}>
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}> Scroll to top </button>
        <button onClick={() => scrollTo({ x: 0, y: 0 })}> Scroll to top left </button>
      </div>
      <div style={{ width: '100%', height: '5px', backgroundColor: 'green' }}></div>
      <div style={{ width: '5px', height: '100%', backgroundColor: 'green' }}></div>
    </div>
  )
}
