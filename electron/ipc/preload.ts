import { settingInvoker } from '@/electron/features/settings/ipc/invoke'

export const apiRendererInvoker = {
  setting: settingInvoker,
}

export type ApiRendererInvoker = typeof apiRendererInvoker
