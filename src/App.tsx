import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector, } from './store/hooks'
function App() {
 
  const filterRule=useAppSelector(state => state.filter)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    <>
    {filterRule.rules.map((rule)=>{
     return (<div key={rule.id}>
       <span style={{color:'white'}}>
        {rule.id}
        </span> 
<span>{rule!.field}</span>  
<span>{rule!.operator}</span>  


      </div>)
    })}</>
    </>
  )
}

export default App
