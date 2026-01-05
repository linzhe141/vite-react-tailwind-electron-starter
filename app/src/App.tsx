import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

function App() {
  const { setTheme } = useTheme()
  useEffect(() => {
    return window.ipcRendererApi.on('sendChunk', (a) => {
      console.log('sendChunk', a)
    })
  }, [])
  useEffect(() => {
    return window.ipcRendererApi.on('ping', () => {
      console.log('ping')
    })
  }, [])
  useEffect(() => {
    return window.ipcRendererApi.on('foo', (data) => {
      console.log('foo', data)
    })
  }, [])

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-y-4'>
        <h1 className='text-5xl dark:text-white'>
          vite react tailwind electron starter
        </h1>
        <div className='dark:text-white'>change theme</div>
        <button
          className='transition-transform hover:rotate-45 dark:hidden'
          onClick={() => setTheme('dark')}
        >
          <Sun className='size-28 text-yellow-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.7)] transition-colors' />
        </button>
        <button
          className='hidden transition-transform hover:rotate-30 dark:block'
          onClick={() => setTheme('light')}
        >
          <Moon className='size-28 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition-colors' />
        </button>
      </div>
    </div>
  )
}

export default App
