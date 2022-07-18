import * as React from 'react';
import'./aside.scss';

export default function Sorting() {
  return (
    <div className='sorting-container'>
    <h3 className='sorting-title'>Sort by:</h3>
    <ul className='filter-list-button'>
            <li><button className='sort-button'>Price</button></li>
            <li><button className='sort-button'>Name</button></li>
          </ul>
    </div>
  );
}
