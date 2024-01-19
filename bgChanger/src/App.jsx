import { useState } from "react"

function App() {
  const [Color, setColor] = useState("olive")

  const changeColor=(color)=>{
      setColor(color);
  }

  return (
    <div className="flex flex-wrap justify-center w-full h-screen duration-200"
    style={{backgroundColor:Color}}>

      <div className="fixed flex flex-wrap gap-6 justify-between items-center bottom-10 rounded-md  bg-stone-700 p-2">
          <button onClick={()=>{changeColor("red")}} className="bg-red-600 p-3 rounded-xl">Red</button>
          <button onClick={()=>{changeColor("blue")}} className="bg-blue-600 p-3 rounded-xl">Blue</button>
          <button onClick={()=>{changeColor("yellow")}} className="bg-yellow-600 p-3 rounded-xl">Yellow</button>
          <button onClick={()=>{changeColor("green")}} className="bg-green-600 p-3 rounded-xl">Green</button>
          <button onClick={()=>{changeColor("purple")}} className="bg-purple-600 p-3 rounded-xl">Purple</button>
      </div>
    </div>
  )
}

export default App
