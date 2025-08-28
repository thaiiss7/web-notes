import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YellowSquare } from './components/yellowSquare'
import { PurpleSquare } from './components/PurpleSquare'
import { BlueSquare } from './components/BlueSquare'
import { Square } from './components/Square'

const App = () => {

  return (
    <>
    <div className='body'>
      <YellowSquare />
      <PurpleSquare />
      <BlueSquare />
      <Square classe="purple" />
    </div>
    </>
  )
}

export default App
