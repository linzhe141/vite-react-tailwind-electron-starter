import type { IpcRenderer, IpcMain } from 'electron'
import type { StoreType } from './store'
let _store: StoreType = null!
let _ipcMain: IpcMain = null!
let _ipcRenderer: IpcRenderer = null!

interface Context {
  store: StoreType
  ipcMain: IpcMain
  ipcRenderer: IpcRenderer
}
export function getContext() {
  return {
    store: _store,
    ipcMain: _ipcMain,
    ipcRenderer: _ipcRenderer,
  } satisfies Context
}

export function setStore(store: StoreType) {
  _store = store
}

export function setIpcRenderer(ipcRenderer: IpcRenderer) {
  _ipcRenderer = ipcRenderer
}

export function setIpcMain(ipcMain: IpcMain) {
  _ipcMain = ipcMain
}
