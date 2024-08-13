import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setcounter]= useState(10)
   const addValue = () =>{
    if(counter<=19)
    // this four statemnt is wor when you want to increment by 4 from one by one it is taking callback to setCounter method internally
    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)
    // setcounter(prevCounter => prevCounter + 1)
    setcounter(counter+1);
   }
   let removeValue = () =>{
    if(counter>=0)
    setcounter(counter--)
   }

  return (
    <>
      <h1>Chai Aur Code</h1>  
      <h2>Counter value: {counter}</h2>
      <button onClick = {addValue}
      >Add Value : {counter}</button><br />
      <button onClick={removeValue}
      >Remove Value : {counter}</button>
    </>
  )
}

export default App
