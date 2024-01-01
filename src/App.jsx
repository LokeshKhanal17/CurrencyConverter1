import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-xl font-extrabold font-black flex justify-center items-center'>Currency Converter</h1>
      <h1>header</h1>
      <h1>main
        <h2>
          top
          <h3>lefttop</h3>
          <h3>righttop</h3>
        </h2>
        <h2>
          bottom
          </h2>
      </h1>
      <h1>footer</h1>
    </>
  )
}

export default App
