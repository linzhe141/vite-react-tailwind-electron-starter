import type ElectronStore from 'electron-store'
import type { IpcRenderer, IpcMain } from 'electron'
let _store: ElectronStore = null!
let _ipcMain: IpcMain = null!
let _ipcRenderer: IpcRenderer = null!

interface Context {
  store: ElectronStore
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

export function setStore(store: ElectronStore) {
  _store = store
}

export function setIpcRenderer(ipcRenderer: IpcRenderer) {
  _ipcRenderer = ipcRenderer
}

export function setIpcMain(ipcMain: IpcMain) {
  _ipcMain = ipcMain
}
