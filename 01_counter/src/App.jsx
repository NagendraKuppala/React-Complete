import { useState } from "react"
import "./App.css"

function App() {

  const [count, setCount] = useState(0)
  
  const addCount = () => {
    setCount(pervCount => pervCount + 1);
  }

  const subCount = () => {   
      setCount(pervCount => pervCount - 1);
  }

  return (
    <>
        <h1> Counter Project! </h1>
        <h2> `+` to ADD and `-` to SUBSTRACT </h2>
        <h3> Counter Value: {count} </h3>
        <button onClick={addCount}> + </button>
        <button onClick={subCount}> - </button>
    </>
  )
}

export default App
