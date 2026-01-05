import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import { setupApplicationMenu } from './menu'
import { setupIpcHandle } from './ipc'

export async function start() {
  await app.whenReady()
  setupIpcHandle()
  setupApplicationMenu()
  createWindow()

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
