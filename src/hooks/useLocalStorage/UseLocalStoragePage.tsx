import { useLocalStorage } from './useLocalStorage'

export function UseLocalStoragePage() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key')

  return (
    <div>
      <p>Значение из LocalStorage: {value ?? 'Отсутствует'}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  )
}
