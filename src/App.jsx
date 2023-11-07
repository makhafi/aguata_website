import { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Navbar from './navbar'
 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='header-container'>
      <h1 className='header'>Aguata Improvement Union South Africa </h1>
      <img className='saflag' src="/flagsa.png" alt="saflagsss" />
      
    </div>
     
      <div className="pic">
        <a href="/home.html"><div class="button"><span>visit</span></div></a>
      </div>

      <img src="/lion.jpg" alt="lion" />


      <hr />
      
    </>
      )
}

export default App
