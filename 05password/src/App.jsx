import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setnumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordref = useRef(null)

  // useCallback(fn, dependencies) is React hook that lets you cache a function definition between re-renders
  const passwordGenerator = useCallback( () =>{
    let pass= ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str+= "0123456789"
    if (charAllow) str+= "!@#$%^&*{}[]()-+_~`"

    for( let i = 1; i <= length ; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass +=  str.charAt(char)
    }
    setPassword(pass)

  }, [length, charAllow, numberAllow, setPassword])
 // in useCallback we give the array of dependencis that if they change then optimize and in useEffect we given the array of things that if they change then re-run/ synchronize

 const copyPasswordToClipboard = useCallback( () => {
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password)
 }, [password])

  // useEffect is a React hook that lets you sychronize a component with an external system
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-4 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-10'>
          <input 
          type="text"
          value={password}
          className='bg-white outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setnumberAllow((prev) => !prev)
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllow}
                  id="characterInput"
                  onChange={() =>{
                    setCharAllow((prev) => !prev)
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
