import { getContext } from './context'
const defaultEvents = {
  getElectronStore: {
    handler: () => {
      const { settingsStore } = getContext()
      return settingsStore.store
    },
    invoker: () => {
      const { ipcRenderer } = getContext()
      return ipcRenderer.invoke('getElectronStore')
    },
  },
  dispatchElectronStore: {
    handler: (data: Record<string, unknown>) => {
      const { settingsStore } = getContext()
      Object.entries(data).forEach(([key, newValue]) => {
        settingsStore.set(key, newValue)
      })
    },
    invoker: (data: Record<string, unknown>) => {
      const { ipcRenderer } = getContext()
      return ipcRenderer.invoke('dispatchElectronStore', data)
    },
  },
} as const

export type ApiRendererInvoker = {
  [K in keyof typeof defaultEvents]: (typeof defaultEvents)[K]['invoker']
}

export function createApiRendererInvoker() {
  const apiRendererInvoker = {} as ApiRendererInvoker
  Object.entries(defaultEvents).forEach(([name, event]) => {
    // @ts-expect-error ignore this line
    apiRendererInvoker[name] = event.invoker
  })
  return apiRendererInvoker
}

export function createIpcHandler() {
  const { ipcMain } = getContext()
  Object.entries(defaultEvents).forEach(([name, event]) => {
    ipcMain.handle(name, (_e, data) => {
      return event.handler(data)
    })
  })
}
