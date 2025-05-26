import Store from 'electron-store'
export type Settings = {
  theme: 'dark' | 'light'
}
export const store = new Store<Settings>({
  defaults: {
    theme: 'dark',
  },
  name: 'settings',
  fileExtension: 'json',
})

export type StoreType = typeof store
