import * as React from 'react';
import './card.scss';
import ProductItem from '../backend/productItem';
import ob from "../backend/products.json";

const obInArr = ob.products;

obInArr.map(item => 
  new ProductItem(
  item.name,
  item.type,
  item.img,
  item.size,
  item.color,
  item.description,
  item.material,
  120
))
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
        <button className='add-button-card'>Add to card</button>
      </div>
  );
}