import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 rounded-xl text-black font-bold px-3 py-2 mb-5'>Tailwind Css</h1>
      <Card username="Satyam" btntxt="Click me"/>
      <Card username="Abhijeet"/>
    </>
  )
}

export default App
