import { use, useState } from 'react'

function App({ initTheme }: { initTheme: Promise<string> }) {
  const [theme, setTheme] = useState(use(initTheme))
  return (
    <div>
      {theme === 'light' ? (
        <div
          v-if='theme === "light"'
          className='bg-red-100'
          onClick={async () => {
            const apiInvoker = window.apiInvoker
            const x = await apiInvoker.foo('zzz')
            console.log(x)

            setTheme('dark')
            apiInvoker.setTheme('dark')
          }}
        >
          dark mode
        </div>
      ) : (
        <div
          className='bg-red-100'
          onClick={async () => {
            const apiInvoker = window.apiInvoker
            const x = await apiInvoker.foo('zzz')
            console.log(x)
            setTheme('light')
            apiInvoker.setTheme('light')
          }}
        >
          light mode
        </div>
      )}
    </div>
  )
}

export default App
