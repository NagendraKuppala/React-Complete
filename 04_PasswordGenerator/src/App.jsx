
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numPass, setNumPass] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [psw, setPsw] = useState("")

// useCallback() hook - cache a function definition between re-renders.
// const cachedFn = useCallback(fn, dependencies[])

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numPass){
      str += "0123456789"
    }
    if (specialChar){
      str += "!@#$%^&*()_+<>?/.,;:|`~[]{}"
    }

    let pass =""

    for (let i = 0; i < length; i++) {
      let char
      char = Math.floor((Math.random() * str.length)+1)
      pass += str.charAt(char);
    }

    setPsw(pass)
  }, [length, numPass, specialChar, setPsw])

/** useEffect Hook allows to perform side effects in your components.
 * Some examples of side effects are: fetching data, directly updating the DOM, and timers.
 * useEffect accepts two arguments. The second argument is optional.
 * useEffect(<function>, <dependency>) */

  useEffect(passwordGenerator,[length, numPass, specialChar, passwordGenerator])

/** useRef Hook allows to persist values between renders.
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It can be used to access a DOM element directly. */ 

const copyPassword = useRef(null) //default set to null
const copied = useRef(null)

const copyToClipboard = useCallback(()=>{
  copyPassword.current?.select() //select the input text
  navigator.clipboard.writeText(psw).then( () => {
    copied.current.innerHTML = "Copied" // Change button text to "Copied"
    setTimeout(() => {
      copied.current.innerText = "copy" // Revert back to the original text
      // Reset the selection range by setting it to the end of the input text
      copyPassword.current.setSelectionRange(copyPassword.current.value.length, copyPassword.current.value.length);
    }, 700)
  }).catch(err => {
    console.error('Failed to copy: ', err)
    })
},[psw])

const generatePswd = passwordGenerator

  return (
    <div className="w-full mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 max-w-fit">
      <h1 className='text-white text-center my-3'> Password Generator..</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            id="passwordField"
            value={psw}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={copyPassword} 
            />
        <button ref={copied} onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>    
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          id="inputLength"
          min={8}
          max={32}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label htmlFor="inputLength">Length:{length}</label> 
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numPass}
              id="alphaNumericInput"
              onChange={() => {
                setNumPass((prevValue) => !prevValue);
              }}/>
          <label htmlFor="alphaNumericInput">AlphaNumeric</label>   
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={specialChar}
              id="specialAlphaNumericInput"
              onChange={() => {
                setSpecialChar((prevValue) => !prevValue);
              }}/>
          <label htmlFor="specialAlphaNumericInput">SpecialAlphaNumeric</label>   
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <button onClick={generatePswd} className='bg-blue-700 hover:bg-blue-800 focus:
        outline-none transition duration-150 ease-in-out uppercase font-bold text-xs text-white
        px-4 py-2 rounded-lg'>Generate Password</button>
      </div>  
    </div>
  )
}

export default App
