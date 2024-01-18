import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setcounter] = useState(0)

  const addValue=()=>{
    setcounter(Math.min(counter+1,20))
  }

  const removeValue=()=>{
    setcounter(Math.max(counter-1,0))
  }

  return (
    <>
   <h2>Counter value : {counter}</h2>

   <button onClick={addValue}>Add value</button>
   <br />
   <button onClick= {removeValue}>remove value</button>
    </>
  )
}

export default App
