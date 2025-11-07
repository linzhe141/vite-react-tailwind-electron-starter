import { contextBridge } from 'electron'
import { apiRendererInvoker } from './ipc'

contextBridge.exposeInMainWorld('apiRendererInvoker', apiRendererInvoker)
