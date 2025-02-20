/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { UseFetchPage } from './hooks/useFetch/UseFetchPage'
import { UseHoverPage } from './hooks/useHover/UseHoverPage'
import { UseLocalStoragePage } from './hooks/useLocalStorage/UseLocalStoragePage'
import { UseTogglePage } from './hooks/useToggle/UseTogglePage'
import { UseViewportSizePage } from './hooks/useViewportSize/UseViewpoerSIzePage'
import { UseWindowScrollPage } from './hooks/useWindowScroll/UseWindowScrollPage'

function App() {
  // return <UseFetchPage />
  // return <UseLocalStoragePage />
  // return <UseHoverPage />
  // return <UseViewportSizePage />
  // return <UseWindowScrollPage />
  return <UseTogglePage />
}

export default App
