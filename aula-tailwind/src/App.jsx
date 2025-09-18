import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='h-screen flex flex-col justify-center items-center'>
        <div className='text-blue-400 text-5xl m-10'>hello world!</div>
        <div className='w-52 h-52 bg-blue-200'></div>
      </div> */}

      <div className='h-screen flex flex-col'>
        <div className='h-[33.3%] flex flex-row justify-between'>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
            <div className='h-1/3'></div>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3'></div>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
            <div className='h-1/3'></div>
            <div className='h-1/3 flex justify-end'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3'></div>
            <div className='h-1/3'></div>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
        </div>
        <div className='h-[33.3%] flex flex-row justify-between items-center'>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
            <div className='h-1/3 flex flex-row justify-between'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
        </div>
        <div className='h-[33.3%] flex flex-row justify-between items-end'>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-end'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
            <div className='h-1/3'></div>
            <div className='h-1/3'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3'></div>
            <div className='h-1/3 flex justify-center'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
          <div className='bg-fuchsia-300 h-[200px] w-[200px]'>
            <div className='h-1/3 flex justify-end'>
              <div className='w-1/3 h-[100%] bg-blue-600'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
