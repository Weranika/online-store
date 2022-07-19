import React from 'react';
import'./aside.scss';
import RangeSlider from './slyder';
import Sorting from './sorting';
import Products from './products';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import ProductItem from '../backend/productItem';
import {
  filterTypeSofa,
  filterTypeChair,
  filterSizeOne,
  filterSizeTwo,
  filterSizeThree,
  filterColorBrownFilter,
  filterColorGreyFilter,
  filterColorBeigeFilter,
  filterColorDarkGreyFilter,
  filterMaterialRottang,
  filterMaterialMetall,
  filterMaterialWood,
  selectedFilters
} from '../store/reducer';

function Aside() {
  const dispatch = useAppDispatch();
  const listOfFilters = useAppSelector(selectedFilters);

  return (
    <aside className="aside">
      <div className="aside-container">
        <h3 className='aside-title'>Filter by:</h3>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Type:</h4>
          <ul className='filter-list-button'>
            <li><button className={listOfFilters.typeSofaFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterTypeSofa())
                        }>Sofa</button></li>
            <li><button className={listOfFilters.typeChairFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterTypeChair())
                        }>Chair</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Size:</h4>
          <ul className='filter-list-button'>
            <li><button className={listOfFilters.SizeOneFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterSizeOne())
                        }>1</button></li>
            <li><button className={listOfFilters.SizeTwoFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterSizeTwo())
                        }>2</button></li>
            <li><button className={listOfFilters.SizeThreeFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterSizeThree())
                        }>3</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Color:</h4>
          <ul className='filter-list-button'>
            <li><button className={listOfFilters.colorBrownFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterColorBrownFilter())
                        }>Brown</button></li>
            <li><button className={listOfFilters.colorGreyFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterColorGreyFilter())
                        }>Grey</button></li>
            <li><button className={listOfFilters.colorBeigeFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterColorBeigeFilter())
                        }>Beige</button></li>
            <li><button className={listOfFilters.colorDarkGreyFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterColorDarkGreyFilter())
                        }>Dark grey</button></li>
          </ul>
        </div>
        <div className="filter-type">
          <h4 className='fiitered-item-title'>Material:</h4>
          <ul className='filter-list-button'>
            <li><button className={listOfFilters.materialRottangFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterMaterialRottang())
                        }>Rottang</button></li>
            <li><button className={listOfFilters.materialMetallFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterMaterialMetall())
                        }>Metall</button></li>
            <li><button className={listOfFilters.materialWoodFilter ?'filter-button active' : 'filter-button'}
                        onClick={(event) => dispatch(filterMaterialWood())
                        }>Wood</button></li>
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
