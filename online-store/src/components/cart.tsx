import * as React from 'react';
import img from '../assets/icons/shopping.png';

export default function Cart() {
  return (
    <div className="cart">
      <img className='cart-logo' alt='cart' src= {img}></img>
      <div className='cart-counter' id='cart-counter'>0</div>
  </div>
  );
}