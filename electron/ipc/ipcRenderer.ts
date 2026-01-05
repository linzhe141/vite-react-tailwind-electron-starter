import { ipcRenderer, type IpcRendererEvent } from 'electron'
import type { MainMessage, RenderMessage } from './channels'

export const ipcRendererApi = {
  invoke<T extends keyof RenderMessage>(
    ch: T,
    ...data: Parameters<RenderMessage[T]>
  ) {
    return ipcRenderer.invoke(ch, ...data)
  },
  on<T extends keyof MainMessage>(ch: T, handler: MainMessage[T]) {
    // @ts-expect-error ignore
    const fn = (_e: IpcRendererEvent, data) => {
      if (data?.length) {
        handler(data[0])
      } else {
        handler(data)
      }
    }
    ipcRenderer.addListener(ch, fn)
    return () => {
      ipcRenderer.removeListener(ch, fn)
    }
  },
}

export type IpcRendererApi = typeof ipcRendererApi
