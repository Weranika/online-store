import React from 'react';
import'./aside.scss';
import RangeSlider from './slyder';
import Sorting from './sorting';
import Products from './products';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../backend/productItem';
import {
  filterTypeChair
  
} from '../store/reducer';

function Aside() {
  const dispatch = useDispatch();

  function FilterByTypeSofa(elem : ProductItem) {
    console.log(1133333)
    return elem.type === 'Sofa';
  }
  return (
    <aside className="aside">
      <div className="aside-container">
        <h3 className='aside-title'>Filter by:</h3>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Type:</h4>
          <ul className='filter-list-button'>
            <li><button className='filter-button' onClick={() => dispatch(filterTypeChair())}>Sofa</button></li>
            {/* <li><button className='filter-button' onClick={() => dispatch(filter(FilterByTypeSofa))}>Sofa</button></li> */}
            <li><button className='filter-button'>Chair</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Size:</h4>
          <ul className='filter-list-button'>
            <li><button className='filter-button'>1</button></li>
            <li><button className='filter-button'>2</button></li>
            <li><button className='filter-button'>3</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Color:</h4>
          <ul className='filter-list-button'>
            <li><button className='filter-button'>Brown</button></li>
            <li><button className='filter-button'>Grey</button></li>
            <li><button className='filter-button'>Beige</button></li>
            <li><button className='filter-button'>Dark grey</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Material:</h4>
          <ul className='filter-list-button'>
            <li><button className='filter-button'>Rottang</button></li>
            <li><button className='filter-button'>Metall</button></li>
            <li><button className='filter-button'>Wood</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Price:</h4>
          <RangeSlider/>
        </div>
      </div>
      <button className='reset-button'>Reset filters</button>
      <Sorting/>
    </aside>
  );
}

export default Aside;
