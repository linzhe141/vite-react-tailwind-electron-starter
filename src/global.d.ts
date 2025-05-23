import type { ApiInvoker } from '../electron/ipcEvent'
declare global {
  interface Window {
    apiInvoker: ApiInvoker
  }
}
