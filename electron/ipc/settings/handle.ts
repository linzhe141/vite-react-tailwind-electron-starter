import { ipcMain } from 'electron'
import type { Channel, SETTING_CHANNELS } from './channels'
import { dispatchStore, getStore } from './service'

type Handler<T extends Channel> = SETTING_CHANNELS[T]

export function setupIpcHandle() {
  {
    const ch: Channel = 'setting:GET_STORE'
    const handle: Handler<typeof ch> = () => {
      return getStore()
    }
    ipcMain.handle(ch, (_event) => {
      return handle()
    })
  }

  {
    const ch: Channel = 'setting:DISPATCH_STORE'
    const handle: Handler<typeof ch> = (data) => {
      dispatchStore(data)
    }
    ipcMain.handle(ch, (_event, data) => {
      return handle(data)
    })
  }
}
