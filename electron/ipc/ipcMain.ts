import { BrowserWindow, ipcMain } from 'electron'
import type { MainChannel, RenderChannel } from './channels'

export const ipcMainApi = {
  handle<T extends keyof RenderChannel>(ch: T, fn: RenderChannel[T]) {
    ipcMain.handle(ch, (_e, data) => fn(data))
  },
  send<T extends keyof MainChannel>(
    ch: T,
    ...data: Parameters<MainChannel[T]>
  ) {
    const windows = BrowserWindow.getAllWindows()
    for (const w of windows) {
      w.webContents.send(ch, ...data)
    }
  },
}
