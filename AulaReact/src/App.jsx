import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { quadradoA } from './components/quadradoA'

const App = () => {

  return (
    <>
      <HelloWorld />
      <quadradoA />
    </>
  )
}

export default App
