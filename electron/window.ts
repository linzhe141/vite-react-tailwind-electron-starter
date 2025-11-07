import { BrowserWindow } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let mainWindow: BrowserWindow | null = null

export function getMainWindow() {
  return mainWindow
}

export function createWindow() {
  const minHeight = 800
  const minWidth = 1200
  const win = new BrowserWindow({
    title: 'todo',
    width: minWidth,
    height: minHeight,
    minWidth,
    minHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
    },
  })

  mainWindow = win
  return mainWindow
}
