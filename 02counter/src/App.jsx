import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)

  // let counter = 5

  const addvalue = () => {
    if(counter < 20){
      setCount(counter + 1)
    }
    else{
      counter = 20
    }
  }

  const removevalue = () => {
    if (counter > 0){
      setCount(counter - 1)
    }
    else {
      counter = 0
    }
  }

  return (
    <>
       <h1>chai aur react</h1>
       <h2>counter value: {counter} </h2>
       <button
       onClick={addvalue}
       >Add value {counter} </button>
       <br />
       <button
       onClick={removevalue}
       >Remove value {counter} </button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
