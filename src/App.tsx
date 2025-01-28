/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { UseFetchPage } from './hooks/useFetch/UseFetchPage'
import { UseHoverPage } from './hooks/useHover/UseHoverPage'
import { UseLocalStoragePage } from './hooks/useLocalStorage/UseLocalStoragePage'
import { UseViewportSizePage } from './hooks/useViewportSize/UseViewpoerSIzePage'

function App() {
  // return <UseFetchPage />
  // return <UseLocalStoragePage />
  // return <UseHoverPage />
  return <UseViewportSizePage />
}

export default App
