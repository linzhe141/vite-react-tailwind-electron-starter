import { useElectronStore } from '../store/electronStore'

export function useTheme() {
  const theme = useElectronStore((state) => state.theme)
  const setTheme = useElectronStore((state) => state.setTheme)
  function setThemeHandler(newTheme: 'dark' | 'light') {
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
