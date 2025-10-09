import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState("")
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log("testando aqui uai")
  }, [text]) //toda vez que o valor de text mudar o useeffect dispara

  return (
    <>

      <button onClick={() => setValue(value - 1)}>-</button>
      {value}
      <button onClick={() => setValue(value + 1)}>+</button>

      <br />

      <input type="text" onChange={ (e) => setText(e.target.value) }/>
      <h1>{text}</h1>

      <br />

      <button onClick={() => setShow(!show)}>clica vai</button> {/*altera a visibilidade mudando o valor da variável */}
      { show &&
      <div style={{backgroundColor: 'blue', width: '200px', height: '200px'}}>você é</div>
      }

      <br />
      {/* com ternário */}
      { show ? <div style={{backgroundColor: 'blue', width: '200px', height: '200px'}}>esquisito</div> : ""}
    </>
  )
}

export default App
