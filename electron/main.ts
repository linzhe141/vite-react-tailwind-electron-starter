import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createIpcHandler } from './ipcEvent'
import { settingsStore } from './settingsStore'
import { setIpcMain, setSettingsStore } from './context'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.whenReady().then(() => {
  const minHeight = 800
  const minWidth = 1200
  const win = new BrowserWindow({
    title: 'Main window',
    width: minWidth,
    height: minHeight,
    minWidth,
    minHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    win.webContents.openDevTools()
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }
  // 移除窗口边框
  win.setMenuBarVisibility(false)
  win.webContents.on('did-finish-load', () => {
    win.webContents.setZoomFactor(1)
    win.webContents.setVisualZoomLevelLimits(1, 1)
  })
  setSettingsStore(settingsStore)
  setIpcMain(ipcMain)
  createIpcHandler()
})
