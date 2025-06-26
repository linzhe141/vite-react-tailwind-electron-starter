import ElectronStore from 'electron-store'
// @ts-expect-error handle esm to cjs
const Store = ElectronStore.default as typeof ElectronStore
export type Settings = {
  theme: 'dark' | 'light'
  apiKey: string
  baseUrl: string
  endPoint: string
}
export const settingsStore = new Store<Settings>({
  defaults: {
    theme: 'dark',
    apiKey: '',
    baseUrl: '',
    endPoint: '',
  },
  name: 'settings',
  fileExtension: 'json',
})

export type SettingsStoreType = typeof settingsStore
