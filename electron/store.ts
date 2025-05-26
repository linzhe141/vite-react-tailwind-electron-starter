import Store from 'electron-store'

export const store = new Store({
  defaults: {
    theme: 'dark',
  },
  name: 'settings',
  fileExtension: 'json',
})

export type StoreType = typeof store
