import * as React from 'react';
import img from '../assets/icons/close-button.png';
import ProductItem from '../backend/productItem';
import { useDispatch } from 'react-redux';
import {
  filterForSearch
} from '../store/reducer';

const focus = function setFocus(){
  const input = document.getElementById('input') as HTMLInputElement;
  input.focus();
}

export default function Input() {
  const dispatch = useDispatch();

  return (
    <div className='search-container' onLoad={focus}>
      <input placeholder='Enter search item' 
              autoFocus 
              onChange={(event) => dispatch(filterForSearch())}
              type="search" 
              className="search-input" 
              id='input'
              autoComplete='off'
              name='name'
              />
      <div className='search-clear'></div>
    </div>
  );
}