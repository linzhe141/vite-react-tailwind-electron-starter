import { settingsStore } from '@/electron/store/settingsStore'
export function getStore() {
  return settingsStore.store
}

export function dispatchStore(data: Record<string, unknown>) {
  Object.entries(data).forEach(([key, newValue]) => {
    settingsStore.set(key, newValue)
  })
}
