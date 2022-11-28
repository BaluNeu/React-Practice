import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './Product.jsx'
import React from 'react';
import Status from './Status.jsx'

function App() {

  return (
    <div className="App">


      <Status />
      <button type="">ChangeStatus</button>

      {/* <Product name = "Balu" description = "kodithe kottaali" price = {32.5}/>
      <Product name = "Allu" description = "kodithe gettiga kottaali" price = {34.5}/> */}

      {/* <button onClick = {changeStatus}>changeStatus</button> */}
      
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </div>
  )
}

export default App
