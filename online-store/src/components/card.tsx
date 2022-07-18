import * as React from 'react';
import './card.scss';
import ProductItem from '../backend/productItem';
interface CardI { 
  name:ProductItem
}

export default function Card(props:CardI) {
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
        <button className='add-button-cart'>Add to cart</button>
      </div>
  );
}