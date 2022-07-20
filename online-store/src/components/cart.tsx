import * as React from 'react';
import img from '../assets/icons/shopping.png';
import { useAppSelector } from '../store/hooks';
import { cartItems } from '../store/reducer';

export default function Cart() {
  const arrOfAddedItems =  useAppSelector(cartItems);

  return (
    <div className="cart">
      <img className='cart-logo' alt='cart' src= {img}></img>
      <div className='cart-counter' id='cart-counter'>{arrOfAddedItems.length.toString()}</div>
  </div>
  );
}