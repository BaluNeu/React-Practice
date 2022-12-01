//import logo from './logo.svg';
import './App.css';
import Product from './Product.js'
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    //count+=1;

    setCount(count+1);
  }

  function decrement(){
    //count-=1;

    setCount(count-1);
  }
  return (
    <div className="App">

      <Product name="Balu" description = "kodithe gettiga kottaali" price = {34.5}/>
      <p>The count is : {count}</p>
      <button type="" onClick = {increment}>+</button>
      <button type="" onClick = {decrement}>-</button>
    </div>
  );
}

export default App;
