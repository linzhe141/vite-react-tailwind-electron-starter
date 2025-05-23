import { ipcMain } from 'electron'

import { getContext } from './context'
const defaultEvents = {
  foo: {
    handler: (data: string) => {
      return data + ' world'
    },
    invoker: (data: string) => {
      const { ipcRenderer } = getContext()
      return ipcRenderer.invoke('foo', data)
    },
  },
  getTheme: {
    handler: () => {
      const { store } = getContext()
      return store.get('theme') ?? 'light'
    },
    invoker: () => {
      const { ipcRenderer } = getContext()
      return ipcRenderer.invoke('getTheme')
    },
  },
  setTheme: {
    handler: (data: string) => {
      const { store } = getContext()
      store.set('theme', data)
    },
    invoker: (data: string) => {
      const { ipcRenderer } = getContext()
      return ipcRenderer.invoke('setTheme', data)
    },
  },
} as const

export type ApiInvoker = {
  [K in keyof typeof defaultEvents]: (typeof defaultEvents)[K]['invoker']
}

export function createApiInvoker() {
  const apiInvoker = {} as ApiInvoker
  Object.entries(defaultEvents).forEach(([name, event]) => {
    // @ts-expect-error ignore this line
    apiInvoker[name] = event.invoker
  })
  return apiInvoker
}

export function createIpcHandler() {
  Object.entries(defaultEvents).forEach(([name, event]) => {
    ipcMain.handle(name, (_e, data) => {
      return event.handler(data)
    })
  })
}
