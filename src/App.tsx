function App() {
  return (
    <div
      className='bg-red-100'
      onClick={async () => {
        const electronAPI = window.electronAPI
        const x = await electronAPI.foo('hello', ['world'])
        console.log(x)
      }}
    >
      123
    </div>
  )
}

export default App
