import { contextBridge } from 'electron'
import { apiRendererInvoker } from '../ipc/api'

if (process.contextIsolated) {
  contextBridge.exposeInMainWorld('apiRendererInvoker', apiRendererInvoker)
} else {
  window.apiRendererInvoker = apiRendererInvoker
}
