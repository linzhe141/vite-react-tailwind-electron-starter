import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
const theme = window.apiInvoker.getTheme()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App initTheme={theme} />
  </StrictMode>
)
