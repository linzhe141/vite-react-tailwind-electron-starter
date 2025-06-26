import type { ApiRendererInvoker } from '@/electron/ipc/preload'
declare global {
  interface Window {
    apiRendererInvoker: ApiRendererInvoker
  }
}
