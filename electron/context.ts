import type { BrowserWindow } from 'electron'
import type { SettingsStoreType } from './store/settingsStore'
let _settingsStore: SettingsStoreType = null!
let _rootWindow: BrowserWindow = null!

interface Context {
  settingsStore: SettingsStoreType
  rootWindow: BrowserWindow
}
export function getContext() {
  return {
    settingsStore: _settingsStore,
    rootWindow: _rootWindow,
  } satisfies Context
}

export function setSettingsStore(settingsStore: SettingsStoreType) {
  _settingsStore = settingsStore
}

export function setRootWindow(rootWindow: BrowserWindow) {
  _rootWindow = rootWindow
}
