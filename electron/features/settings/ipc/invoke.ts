import { ipcRenderer } from 'electron'
import type { SETTING_CHANNELS, Channel } from './channels'

export interface SettingInvoker {
  getElectronStore: SETTING_CHANNELS['setting:GET_STORE']
  dispatchElectronStore: SETTING_CHANNELS['setting:DISPATCH_STORE']
}

export const settingInvoker: SettingInvoker = {
  getElectronStore() {
    const ch: Channel = 'setting:GET_STORE'
    return ipcRenderer.invoke(ch)
  },
  dispatchElectronStore: (data: Record<string, unknown>) => {
    const ch: Channel = 'setting:DISPATCH_STORE'
    return ipcRenderer.invoke(ch, data)
  },
}
