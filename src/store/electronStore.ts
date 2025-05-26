import { create } from 'zustand'
import type { StoreApi, UseBoundStore } from 'zustand'
import { forwardToElectronStore } from './forwardToElectronStore'
import type { Theme } from '../../types'

type State = {
  theme: Theme
}

type Actions = {
  setTheme: (theme: Theme) => void
}

export let useElectronStore: UseBoundStore<StoreApi<State & Actions>> = null!
export async function createElectronStore() {
  const initState = await window.apiRendererInvoker.getElectronStore()
  useElectronStore = create<State & Actions>(
    forwardToElectronStore((set) => ({
      ...initState,
      setTheme: (theme) => {
        set({ theme })
      },
    }))
  )
}
