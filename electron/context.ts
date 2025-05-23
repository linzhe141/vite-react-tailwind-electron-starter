import type ElectronStore from 'electron-store'
import type { IpcRenderer } from 'electron'
let _store: ElectronStore = null!
let _ipcRenderer: IpcRenderer = null!

interface Context {
  store: ElectronStore
  ipcRenderer: IpcRenderer
}
export function getContext() {
  return {
    store: _store,
    ipcRenderer: _ipcRenderer,
  } satisfies Context
}

export function setStore(store: ElectronStore) {
  _store = store
}

export function setIpcRenderer(ipcRenderer: IpcRenderer) {
  _ipcRenderer = ipcRenderer
}
