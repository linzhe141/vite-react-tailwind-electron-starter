import { useElectronSettingStore } from '../store/electronSettingStore'
import type { Theme } from '../../types'

export function useTheme() {
  const theme = useElectronSettingStore((state) => state.theme)
  const setTheme = useElectronSettingStore((state) => state.setTheme)
  function setThemeHandler(newTheme: Theme) {
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return {
    theme,
    setTheme: setThemeHandler,
  }
}
