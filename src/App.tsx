import { useTheme } from './hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

function App() {
  const { setTheme } = useTheme()
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
          <Sun />
        </button>
        <button
          className='hidden text-white transition-transform hover:rotate-[30deg] dark:block'
          onClick={() => setTheme('light')}
        >
          <Moon />
        </button>
      </div>
    </div>
  )
}

export default App
