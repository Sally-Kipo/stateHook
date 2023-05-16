import React, { useState } from 'react';
import './state.css';

function Clickable() {
  const [count, setCount] = useState(0)



  function increment() {
    setCount  (prevCount => prevCount+1)
  }
  function decrement() {
    setCount  (prevCount => prevCount-1)
  }
  return (
    <div className='counter-box'>
  <button className='counter' onClick={increment}>+</button>
  <p className='para'>I have clicked {count} times</p>
  <button className='counter' onClick={decrement}>-</button>
  </div>
  );
}

export default Clickable;




