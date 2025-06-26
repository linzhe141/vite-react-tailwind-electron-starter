import { create } from 'zustand'
import type { StoreApi, UseBoundStore } from 'zustand'
import { forwardToElectronStore } from './forwardToElectronStore'
import type { Theme } from '@/types'

type State = {
  theme: Theme
}

type Actions = {
  setTheme: (theme: Theme) => void
}

export let useElectronSettingStore: UseBoundStore<StoreApi<State & Actions>> =
  null!
export async function createElectronSettingStore() {
  const initState = await window.apiRendererInvoker.setting.getElectronStore()
  useElectronSettingStore = create<State & Actions>(
    forwardToElectronStore(
      (set) => ({
        ...initState,
        setTheme: (theme) => {
          set({ theme })
        },
      }),
      window.apiRendererInvoker.setting.dispatchElectronStore
    )
  )
}
