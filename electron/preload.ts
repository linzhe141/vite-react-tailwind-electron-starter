import { contextBridge, ipcRenderer } from 'electron'
import { createApiInvoker } from './ipcEvent'
import { setIpcRenderer } from './context'

setIpcRenderer(ipcRenderer)
contextBridge.exposeInMainWorld('apiInvoker', createApiInvoker())
