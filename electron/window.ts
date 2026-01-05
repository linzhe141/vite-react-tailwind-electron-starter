import { BrowserWindow } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { IS_DEV } from './utils'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const iconPath = path.join(__dirname, '../../../resources/logo.png')
let mainWindow: BrowserWindow | null = null

export function getMainWindow() {
  return mainWindow
}

export function createWindow() {
  const minHeight = 800
  const minWidth = 1200
  mainWindow = new BrowserWindow({
    title: 'Vite React Tailwind Electron Starter',
    width: minWidth,
    height: minHeight,
    minWidth,
    minHeight,
    icon: iconPath,
    // titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.mjs'),
      nodeIntegration: true,
      contextIsolation: false,
      sandbox: false,
    },
  })

  if (IS_DEV) {
    mainWindow.loadURL('http://localhost:1412')
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  } else {
    // Load your file
    mainWindow.loadFile('dist/app/index.html')
  }

  return mainWindow
}
