import { contextBridge } from 'electron'
import { apiRendererInvoker } from './ipc/preload'

contextBridge.exposeInMainWorld('apiRendererInvoker', apiRendererInvoker)
