import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)
  const [color, setColor] = useState("rgb(226, 123, 123)")
  const [count, setCount] = useState(0)
  const [decCount, setDecCount] = useState(0)

  const IncrementDec = () => {
    setCount(count => count + 1)
    if (count % 10 === 0){
      setDecCount(decCount => decCount+1)
    }
  }

  return (
    <>
      <div className='body'>

        { visibility &&
          <div>
            <h1 className="none">achouu!</h1>
          </div>
        }

        <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
          Alterar visibilidade
        </button>
        
        <div style={{backgroundColor : color}} className='square'></div>

        <button onClick={() => {setColor(color == "rgb(226, 123, 123)" ? "rgb(182, 125, 236)" : "rgb(226, 123, 123)")}}>
          Alterar cor
        </button>

        <div className='counter'>
          <p>contagem: {decCount}</p>
        </div>
        <button onClick={IncrementDec}>
          Clique para aumentar a contagem
        </button>

      </div>
    </>
  )
}

export default App
