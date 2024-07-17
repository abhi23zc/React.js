import { useState } from "react";

function App(){
  
  // let counter = 5
  const [counter, setCounter] = useState(0)
  
  function add(){
    setCounter(counter+1)
  }
  function remove(){
    if(counter-1 < 0) return;
    setCounter(counter-1)
  }

  return(
    <>
    <h1>React Hooks </h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={add}>Add Value</button>
    <br />
    <button onClick={remove}>Remove Value</button>
    </>
  )
}
export default App;