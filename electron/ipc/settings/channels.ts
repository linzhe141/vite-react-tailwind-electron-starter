import type { Settings } from '@/electron/store/settingsStore'
export type SETTING_CHANNELS = {
  // forward
  'setting:GET_STORE': () => Promise<Settings> | Settings
  'setting:DISPATCH_STORE': (data: Record<string, unknown>) => void
}

export type Channel = keyof SETTING_CHANNELS
