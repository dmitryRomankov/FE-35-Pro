import React from 'react';
import './burger.css';

const Burger = () => {
  return (
      <button className='burger-btn'>
    <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="90" height="10"></rect>
        <rect y="30" width="90" height="10"></rect>
        <rect y="60" width="90" height="10"></rect>
      </svg>
      </button>
  )
}
export default Burger