import type { Settings } from '@/electron/store/settingsStore'
export interface RenderChannel {
  getStore: () => Settings
  dispatchStore: (data: Record<string, unknown>) => void
}

export interface MainChannel {
  sendChunk: (chunk: string) => void
  foo: (data: Record<'foo', 'bar'>) => void
  ping: () => void
}
