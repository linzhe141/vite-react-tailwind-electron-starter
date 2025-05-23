import { contextBridge, ipcRenderer } from 'electron'

const api = {
  foo: (command: string, args: string[]) =>
    ipcRenderer.invoke('foo', command, args),
}
contextBridge.exposeInMainWorld('electronAPI', api)

export type ElectronAPI = typeof api
