import { getContext } from '@/electron/context'

export function getStore() {
  const { settingsStore } = getContext()
  return settingsStore.store
}

export function dispatchStore(data: Record<string, unknown>) {
  const { settingsStore } = getContext()
  Object.entries(data).forEach(([key, newValue]) => {
    settingsStore.set(key, newValue)
  })
}
