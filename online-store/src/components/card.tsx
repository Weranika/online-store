import * as React from 'react';
import './card.scss';
import ProductItem from '../backend/productItem';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  selectItems,
  cartItems,
  selectedFilters,
  cartAdd,
  cartRemove
} from '../store/reducer';
export interface CardI { 
  item:ProductItem
}
export default function Card(props:CardI) {
  const dispatch = useAppDispatch();
  const arrOfAddedItems =  useAppSelector(cartItems);
  
  return (
      <div className='card'>
        <img alt='card img' className='card-img' src={props.item.img}></img>
        <div className='card-content'>
          <h3 className='card-title'>{props.item.name}</h3>
          <p className='card-discription'>{props.item.description}</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">{props.item.type}</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">{props.item.size}</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">{props.item.color}</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">{props.item.material}</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>{props.item.price}</span>$<span/></p>
        {(arrOfAddedItems.filter(el => el.id === props.item.id).length === 0)
        ? <button className='add-button-cart'
        onClick={(event) => dispatch(cartAdd(props.item))}
        >Add to cart</button>
        : <button className='add-button-cart remove-button-cart'
        onClick={(event) => dispatch(cartRemove(props.item))}
        >Remove from cart</button>
        }
      </div>
  );
}
