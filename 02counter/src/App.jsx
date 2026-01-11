import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let Counter = 5

 const addValue = () => {
  Counter++
 }

  return (
    <>
    <h1>React</h1>
    <h2>Counter Value: {Counter}</h2>

    <button>Add value</button>
    <br />
    <button>Remove Value</button>
    </>
  )
}

export default App
