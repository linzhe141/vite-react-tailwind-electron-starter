import { useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    document.documentElement.className.includes('dark') ? 'dark' : 'light'
  )

  const setThemeHandler = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
    // sync
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    window.apiInvoker.setTheme(newTheme)
  }

  return { theme, setTheme: setThemeHandler }
}
