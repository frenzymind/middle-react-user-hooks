import { useToggle } from './useToggle'

export function UseTogglePage() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  const [valueBool, toggleBool] = useToggle()

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
      <button onClick={() => toggleBool()}>{valueBool.toString()}</button>
    </>
  )
}
