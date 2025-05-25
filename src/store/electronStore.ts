import { create } from 'zustand'
import type { StoreApi, UseBoundStore } from 'zustand'
import { forwardToElectronStore } from './forwardToElectronStore'

type State = {
  theme: 'dark' | 'light'
}

type Actions = {
  setTheme: (theme: 'dark' | 'light') => void
}

export let useElectronStore: UseBoundStore<StoreApi<State & Actions>> = null!
export async function createElectronStore() {
  const initState = await window.apiRendererInvoker.getElectronStore()
  useElectronStore = create<State & Actions>()(
    forwardToElectronStore((set) => ({
      ...initState,
      setTheme: (theme: 'dark' | 'light') => {
        set({ theme })
      },
    }))
  )
}
