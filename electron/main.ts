import { app, BrowserWindow, Menu } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { settingsStore } from './store/settingsStore'
import { setSettingsStore, setRootWindow } from './context'
import { setupIpcHandle as setupSettingIpcHandle } from './features/settings/ipc/handle'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createRootWindow() {
  const minHeight = 800
  const minWidth = 1200
  return new BrowserWindow({
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
}

function setupIpcHandle() {
  setupSettingIpcHandle()
}
async function start() {
  await app.whenReady()
  setupIpcHandle()
  const win = createRootWindow()
  setRootWindow(win)

  Menu.setApplicationMenu(Menu.buildFromTemplate([]))
  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }
  win.webContents.openDevTools()
  // 移除窗口边框
  // win.setMenuBarVisibility(false)
  win.webContents.on('did-finish-load', () => {
    win.webContents.setZoomFactor(1)
    win.webContents.setVisualZoomLevelLimits(1, 1)
  })

  //
  setSettingsStore(settingsStore)

  app.on('before-quit', () => {
    console.log('App is quitting, performing cleanup...')
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  // macOS activate TODO
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      //
    }
  })
}

start()
