
import { useState } from "react";
import "./App.css";


const App = () => {

  const [counter, setcounter] = useState(0);
  console.log(counter);

  const increment = () => {
    setcounter(counter + 1)
  }

  const decrement = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <div className="app">
        <h1>Counter App</h1>
        <div className="parent">
          <p className="content">{counter}</p>

          <div className="buttons">
            <button className="btn inc" onClick={decrement}>-</button>
            <button className="btn dec" onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </>
  )

}
export default App



