import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Profile } from './pages/Profile'

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
        <nav>
          <Link to={'/'}>Home </Link>
          <Link to={'/sobre'}>Sobre</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
          <Route path='/profile/:nome' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
