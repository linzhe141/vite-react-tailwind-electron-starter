import type { ApiRendererInvoker } from '../electron/ipcEvent'
declare global {
  interface Window {
    apiRendererInvoker: ApiRendererInvoker
  }
}
