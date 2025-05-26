import type { StateCreator } from 'zustand'

type ForwardToElectronStore = <T>(
  f: StateCreator<T, [], []>
) => StateCreator<T, [], []>

export const forwardToElectronStore: ForwardToElectronStore =
  (f) => (set, get, store) => {
    const forward: typeof set = (...a) => {
      // TODO support (state)=> data
      const newdata = a[0] as Record<string, unknown>
      window.apiRendererInvoker.dispatchElectronStore(newdata)
      console.log('forwardToElectronStore', newdata)
      set(...(a as Parameters<typeof set>))
    }
    return f(forward, get, store)
  }
