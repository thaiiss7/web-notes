import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'

function App() {
  // const [num, setNum] = useState(0)

  // useEffect(() => {
  //   console.log("o conteudo da pagina foi alterado")
  //   console.log(`o novo estado da variavel é ${num}`)
  // }),[num]

  return (
    <>
      {/* <div className='body'>

        <button onClick={() => setNum((num) => num + 1)}>
          clique aqui <h1>{num}</h1>
        </button>

      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
