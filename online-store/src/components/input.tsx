import * as React from 'react';
import img from '../assets/icons/close-button.png';
import ProductItem from '../backend/productItem';
import { useDispatch } from 'react-redux';
import {
  filterForSearch
} from '../store/reducer';

export default function Input() {
  const dispatch = useDispatch();

  return (
    <div className='search-container'>
      <input placeholder='Enter search item' 
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