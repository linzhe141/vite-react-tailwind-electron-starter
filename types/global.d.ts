import type { ApiRendererInvoker } from '@/electron/ipc'
declare global {
  interface Window {
    apiRendererInvoker: ApiRendererInvoker
  }
}
