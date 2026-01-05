import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import App from './src/App'
import { createElectronSettingStore } from '@/app/src/store/electronSettingStore'

await createElectronSettingStore()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
