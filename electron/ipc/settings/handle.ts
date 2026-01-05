import { settingsStore } from '@/electron/store/settingsStore'
import { ipcMainApi } from '../ipcMain'

export function setupIpcMainHandle() {
  ipcMainApi.handle('getStore', () => {
    return settingsStore.store
  })

  ipcMainApi.handle('dispatchStore', (data) => {
    Object.entries(data).forEach(([key, newValue]) => {
      settingsStore.set(key, newValue)
    })

    ipcMainApi.send('sendChunk', 'foo~')
    ipcMainApi.send('ping')
  })
}
