import * as React from 'react';
import './card.scss';
import Card from '../components/card';
import Products from './products';
import { useAppSelector } from '../store/hooks';
import { selectItems } from '../store/reducer';

export default function ArticleAreaCard() {
  const listOfProducts = useAppSelector(selectItems);

  return (
    <article className='main-section'>
      {(listOfProducts.length !== 0)
        ? (listOfProducts.map(item => <Card item={item}/>))
        : <div className='not-found-msg'>Sorry, no matches found</div>
      }
    </article>
  );
}
