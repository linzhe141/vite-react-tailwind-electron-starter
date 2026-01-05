import type { Settings } from '@/electron/store/settingsStore'
export interface RenderMessage {
  getStore: () => Settings
  dispatchStore: (data: Record<string, unknown>) => void
}

export interface MainMessage {
  sendChunk: (chunk: string) => void
  foo: (data: Record<string, unknown>) => void
  ping: () => void
}
