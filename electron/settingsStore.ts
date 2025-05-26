import Store from 'electron-store'
export type Settings = {
  theme: 'dark' | 'light'
}
export const settingsStore = new Store<Settings>({
  defaults: {
    theme: 'dark',
  },
  name: 'settings',
  fileExtension: 'json',
})

export type SettingsStoreType = typeof settingsStore
