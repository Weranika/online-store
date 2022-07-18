import * as React from 'react';
import './card.scss';
import Card from '../components/card';
import Products from './products';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectItems } from '../store/reducer';

export default function ArticleAreaCard() {
  const listOfProducts = useAppSelector(selectItems);

  return (
    <article className='main-section'>
      {listOfProducts.map(item =>  <Card name={item}/>)}
    </article>
  );
}
