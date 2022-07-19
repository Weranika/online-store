import * as React from 'react';
import './card.scss';
import ProductItem from '../backend/productItem';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectItems } from '../store/reducer';

import {
  selectedFilters,
  cartStatus
} from '../store/reducer';

export interface CardI { 
  name:ProductItem
}

export default function Card(props:CardI) {
  const dispatch = useAppDispatch();
  const listOfFilters = useAppSelector(selectedFilters);
  const listOfProducts = useAppSelector(selectItems);
  
  return (
      <div className='card'>
        <img alt='card img' className='card-img' src={props.name.img}></img>
        <div className='card-content'>
          <h3 className='card-title'>{props.name.name}</h3>
          <p className='card-discription'>{props.name.description}</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">{props.name.type}</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">{props.name.size}</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">{props.name.color}</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">{props.name.material}</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>{props.name.price}</span>$<span/></p>
        <button className={listOfFilters.sortingPrice ?'add-button-cart active-card' : 'add-button-cart'}
                onClick={(event) => dispatch(cartStatus())}
                id='add-button'>Add to cart</button>
      </div>
  );
}