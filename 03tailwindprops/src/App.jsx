import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'Pragyan Misra'
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind css</h1>
      <Card username="Pragyan" btntext="Click me" />
      <Card username="Govind" btntext="Visit me"/>
      <Card />
    </>
  )
}

export default App
