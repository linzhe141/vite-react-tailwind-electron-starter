import type { IpcRenderer, IpcMain } from 'electron'
import type { SettingsStoreType } from './settingsStore'
let _settingsStore: SettingsStoreType = null!
let _ipcMain: IpcMain = null!
let _ipcRenderer: IpcRenderer = null!

interface Context {
  settingsStore: SettingsStoreType
  ipcMain: IpcMain
  ipcRenderer: IpcRenderer
}
export function getContext() {
  return {
    settingsStore: _settingsStore,
    ipcMain: _ipcMain,
    ipcRenderer: _ipcRenderer,
  } satisfies Context
}

export function setSettingsStore(settingsStore: SettingsStoreType) {
  _settingsStore = settingsStore
}

export function setIpcRenderer(ipcRenderer: IpcRenderer) {
  _ipcRenderer = ipcRenderer
}

export function setIpcMain(ipcMain: IpcMain) {
  _ipcMain = ipcMain
}
