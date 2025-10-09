import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [dog, Setdog] = useState({})
  const [cat, SetCat] = useState({})

  useEffect(() => {
    getDog()
  }, [])

  useEffect(() => {
    getCat()
  }, [])

  const getDog = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    // console.log(response.data.message)
    Setdog(response.data)
  }

  const getCat = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(response.data.url)
    SetCat(response.data)
  }

  return (
    <>
    <div className='container'>
      <img src={dog.message} alt='' />
      <img src={cat.url} alt="" />
    </div>
    <button onClick={getDog}>troca doginho</button>
    <button onClick={getCat}>troca gatinho</button>
    </>
  )
}

export default App
