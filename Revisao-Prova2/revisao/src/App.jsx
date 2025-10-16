import { useEffect, useState } from 'react'
import './App.css'
import { Botao } from './components/Botao'
import { BotaoTW } from './components/BotaoTW'

// props são propriedades como parâmetros
function Profile({nome, sobrenome, idade}){
  return (
    <>
    <h1>nome: {nome}</h1>
    <h1>sobrenome: {sobrenome}</h1>
    <h1>idade: {idade}</h1>
    </>
  )
}

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

      <br />
      <Profile nome={"Thaís"} sobrenome={"Michel"} idade={"18"} />
      <br />
      <Profile nome={"Helo"} sobrenome={"FazChinelo"} idade={"17"} />
      <br />
      <Profile nome={"Beca"} sobrenome={"Ianz"} idade={"18"} />

      <Botao cor={'green'} conteudo={'login'} altura={'50px'} largura={'200px'} borda={'5px'}/>
      <Botao cor={'pink'} conteudo={'helo linda'} altura={'50px'} largura={'200px'} borda={'5px'}/>
      <br />
      <br />
      <BotaoTW cor="bg-blue-300" conteudo="tailwiiind" altura="h-24" largura="w-24" hover="hover:bg-purple-400"/>  
    </>
  )
}

export default App
