import { settingInvoker } from './settings/invoke'
export const apiRendererInvoker = {
  setting: settingInvoker,
}

export type ApiRendererInvoker = typeof apiRendererInvoker
