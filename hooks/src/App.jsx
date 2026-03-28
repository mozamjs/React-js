// component 

import { useState } from "react"
import './App.css'


function App()
{
  const [counter, setCounter] = useState(0)

  const addCounter = ()=>{
    setCounter(counter + 1)
  }
  const lessCounter = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return(
    <>
    <div className="container">
      <button onClick={lessCounter}>LESS</button>
      <h2>{counter}</h2>
      <button onClick={addCounter}>ADD</button>
    </div>
    </>
  )
}
export default App















