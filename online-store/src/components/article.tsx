import * as React from 'react';
import './card.scss';
import Card from '../components/card';
import ProductItem from '../backend/productItem';
import ob from "../backend/products.json";

const obInArr:Array<ProductItem> = ob.products;

export default function ArticleAreaCard() {
  return (
    <article className='main-section'>
      {obInArr.map(item =>  <Card name={item}/>)}
  </article>
  );
}