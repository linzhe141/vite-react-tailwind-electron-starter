import { BrowserWindow, ipcMain } from 'electron'
import type { MainMessage, RenderMessage } from './channels'

export const ipcMainApi = {
  handle<T extends keyof RenderMessage>(ch: T, fn: RenderMessage[T]) {
    ipcMain.handle(ch, (_e, data) => fn(data))
  },
  send<T extends keyof MainMessage>(
    ch: T,
    ...data: Parameters<MainMessage[T]>
  ) {
    const windows = BrowserWindow.getAllWindows()
    for (const w of windows) {
      if (data?.length) {
        w.webContents.send(ch, data[0])
      } else {
        w.webContents.send(ch)
      }
    }
  },
}
