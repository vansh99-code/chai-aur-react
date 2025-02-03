import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_-+={}[]~`':;?/"

    for (let index = 1; index < length; index++) {
      let charac = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charac) 
    }

    setPassword(pass)

  }, [length, number, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3 bg-white ' 
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0 '>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
               />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      
</div>
      

  )
}

export default App
