import { settingInvoker } from './settings/invoke'
import { setupIpcHandle as setupSettingIpcHandle } from './settings/handle'

export const apiRendererInvoker = {
  setting: settingInvoker,
}

export type ApiRendererInvoker = typeof apiRendererInvoker

export function setupIpcHandle() {
  setupSettingIpcHandle()
}
