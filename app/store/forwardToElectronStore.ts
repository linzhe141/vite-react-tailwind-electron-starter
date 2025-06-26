import type { StateCreator } from 'zustand'

type ForwardToElectronStore = <T>(
  f: StateCreator<T, [], []>,
  dispatchElectronStore: any
) => StateCreator<T, [], []>

export const forwardToElectronStore: ForwardToElectronStore =
  (f, dispatchElectronStore) => (set, get, store) => {
    const forward: typeof set = (...a) => {
      let newdata: Record<string, unknown> = null!
      if (typeof a[0] === 'function') {
        const prevState = get()
        newdata = (
          a[0] as (state: typeof prevState) => Record<string, unknown>
        )(prevState)
      } else {
        newdata = a[0] as Record<string, unknown>
      }
      dispatchElectronStore(newdata)
      console.log('forwardToElectronStore', newdata)
      set(...(a as Parameters<typeof set>))
    }
    return f(forward, get, store)
  }
