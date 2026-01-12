import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(2) //it is a hook, give any default value. it provides to things in the format of array, at first index we get counter and on second place we get function, function is responsible to update value


 const addValue = () => {
  // counter = counter + 1
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  setCounter(counter+1)
  // still only one increment will be there, as useState does updation in batchs
  // if we have to implement updation like this then use this format
  setCounter(prevcounter => prevcounter+1)
  setCounter(prevcounter => prevcounter+1)
  setCounter(prevcounter => prevcounter+1)
  setCounter(prevcounter => prevcounter+1)
 }

 const removeValue = () => {
  if(counter >= 0)
  setCounter(counter--)
 }

  return (
    <>
    <h1>React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
