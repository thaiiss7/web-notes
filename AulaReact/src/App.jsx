import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YellowSquare } from './components/yellowSquare'
import { PurpleSquare } from './components/PurpleSquare'
import { BlueSquare } from './components/BlueSquare'
import { Square } from './components/Square'

const App = () => {

  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("")

  return (
    <>
    <div className='body'>
      {/* <YellowSquare />
      <PurpleSquare />
      <BlueSquare />
      <Square classe="purple" /> */}

        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <input type="text" onChange={(e) => setTexto(e.target.value)} />
        <h1>{texto}</h1>
    </div>
    </>
  )
}

export default App
