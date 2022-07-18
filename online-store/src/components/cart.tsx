import * as React from 'react';
import img from '../assets/icons/shopping.png';

export default function Cart() {
  return (
    <div className="basket">
      <img className='bascet-logo' alt='basket' src= {img}></img>
      <div className='basket-counter'>2</div>
  </div>
  );
}