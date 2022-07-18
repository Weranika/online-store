import * as React from 'react';
import img from '../assets/icons/close-button.png';

export default function Input() {
  return (
    <div className='search-container'>
      <input placeholder='enter search item' 
              type="text" 
              className="search-input" 
              id='input'
              autoComplete='off'
              name='name'
              ></input>
      <div className='search-clear'></div>
      <img className='close-button' 
            src={img}
            onClick={() => {
              const input = document.getElementById('input') as HTMLInputElement;
              input.value = ''}}></img>
    </div>
  );
}