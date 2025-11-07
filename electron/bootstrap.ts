import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import { setupApplicationMenu } from './menu'
import { setupIpcHandle } from './ipc'

export async function start() {
  await app.whenReady()
  setupIpcHandle()
  setupApplicationMenu()
  const win = createWindow()

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    win.webContents.openDevTools({ mode: 'detach' })
  } else {
    // Load your file
    win.loadFile('dist/index.html')
  }
  // 移除窗口边框
  // win.setMenuBarVisibility(false)
  // win.webContents.on('did-finish-load', () => {
  //   win.webContents.setZoomFactor(1)
  //   win.webContents.setVisualZoomLevelLimits(1, 1)
  // })

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
