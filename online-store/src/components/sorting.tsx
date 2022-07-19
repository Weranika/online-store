import * as React from 'react';
import'./aside.scss';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  selectedFilters,
  sortByPrice,
  sortByName
} from '../store/reducer';

export default function Sorting() {
  const dispatch = useAppDispatch();
  const listOfFilters = useAppSelector(selectedFilters);

  return (
    <div className='sorting-container'>
    <h3 className='sorting-title'>Sort by:</h3>
    <ul className='filter-list-button'>
            <li><button className={listOfFilters.sortingPrice ?'sort-button active' : 'sort-button'}
                        onClick={(event) => dispatch(sortByPrice())
                        }>Price</button></li>
            <li><button className={listOfFilters.sortingName ?'sort-button active' : 'sort-button'}
                        onClick={(event) => dispatch(sortByName())
                        }>Name</button></li>
          </ul>
    </div>
  );
}
