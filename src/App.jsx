import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-700 p-2'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
