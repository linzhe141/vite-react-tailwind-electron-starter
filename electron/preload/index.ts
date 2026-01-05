import { contextBridge } from 'electron'
import { ipcRendererApi } from '../ipc/ipcRenderer'

if (process.contextIsolated) {
  contextBridge.exposeInMainWorld('ipcRendererApi', ipcRendererApi)
} else {
  window.ipcRendererApi = ipcRendererApi
}
