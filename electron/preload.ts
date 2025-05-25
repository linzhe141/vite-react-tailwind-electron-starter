import { contextBridge, ipcRenderer } from 'electron'
import { createApiRendererInvoker } from './ipcEvent'
import { setIpcRenderer } from './context'

setIpcRenderer(ipcRenderer)
contextBridge.exposeInMainWorld(
  'apiRendererInvoker',
  createApiRendererInvoker()
)
