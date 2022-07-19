import type { Reducer } from '@reduxjs/toolkit';
import Products from '../components/products';
import ProductItem from '../backend/productItem';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { inputAdornmentClasses } from '@mui/material';
interface Filters{
  typeSofaFilter: boolean,
  typeChairFilter: boolean, 
  SizeOneFilter: boolean, 
  SizeTwoFilter: boolean,
  SizeThreeFilter: boolean,
  colorBrownFilter: boolean,
  colorGreyFilter: boolean,
  colorBeigeFilter: boolean,
  colorDarkGreyFilter: boolean,
  materialRottangFilter: boolean,
  materialMetallFilter: boolean,
  materialWoodFilter: boolean,
}
interface prodI{
  products : Array<ProductItem>,
  filters : Filters
}

const initialState:prodI  = {
  products : Products.getProducts(),
  filters : {
    typeChairFilter:false,
    typeSofaFilter:false,
    SizeOneFilter:false,
    SizeTwoFilter:false,
    SizeThreeFilter:false,
    colorBrownFilter:false,
    colorGreyFilter:false,
    colorBeigeFilter:false,
    colorDarkGreyFilter:false,
    materialRottangFilter: false,
    materialMetallFilter: false,
    materialWoodFilter: false,
  }
};

let activeFilters:Array<(a:ProductItem) => boolean> = [];

const sofaFilter = (item:ProductItem) => item.type === 'Sofa';
const chairFilter = (item:ProductItem) => item.type === 'Chair';

const sizeOneFilter = (item:ProductItem) => item.size === 1;
const sizeTwoFilter = (item:ProductItem) => item.size === 2;
const sizeThreeFilter = (item:ProductItem) => item.size === 3;

const colorBrownFilter = (item:ProductItem) => item.color === 'Brown';
const colorGreyFilter = (item:ProductItem) => item.color === 'Grey';
const colorBeigeFilter = (item:ProductItem) => item.color === 'Beige';
const colorDarkGreyFilter = (item:ProductItem) => item.color === 'Dark grey';

const materialRottangFilter = (item:ProductItem) => item.material === 'Rottang';
const materialMetallFilter = (item:ProductItem) => item.material === 'Metall';
const materialWoodFilter = (item:ProductItem) => item.material === 'Wood';

const searchFilter = (item:ProductItem) => {
  const input = (document.getElementById('input') as HTMLInputElement).value;
  return item.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0;
}

function changeArrOfActiveFilters(filter:(a:ProductItem) => boolean) {
  if (activeFilters.includes(filter)) {
    return activeFilters.filter(elem => elem !== filter);
  } else {
    return [...activeFilters, filter];
  }
}
function renderAllActiveFilters() {
  return Products.getProducts().filter(elem => {
    for (let i = 0; i < activeFilters.length; i++) {
      if (activeFilters[i](elem) === false) {
        return false;
      }
    }
    return true;
  });
}

export const counterSlice = createSlice({
  name: 'prodlist',
  initialState,
  reducers: {
    filterTypeSofa:(state) => {
      state.filters.typeSofaFilter = state.filters.typeSofaFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(sofaFilter);

      state.products = renderAllActiveFilters();
    },
    filterTypeChair:(state) => {
      state.filters.typeChairFilter = state.filters.typeChairFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(chairFilter);

      state.products = renderAllActiveFilters();
    },
    filterSizeOne:(state) => {
      state.filters.SizeOneFilter = state.filters.SizeOneFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(sizeOneFilter);

      state.products = renderAllActiveFilters();
    },
    filterSizeTwo:(state) => {
      state.filters.SizeTwoFilter = state.filters.SizeTwoFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(sizeTwoFilter);

      state.products = renderAllActiveFilters();
    },
    filterSizeThree:(state) => {
      state.filters.SizeThreeFilter = state.filters.SizeThreeFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(sizeThreeFilter);

      state.products = renderAllActiveFilters();
    },
    filterColorBrownFilter:(state) => {
      state.filters.colorBrownFilter = state.filters.colorBrownFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(colorBrownFilter);

      state.products = renderAllActiveFilters();
    },
    filterColorGreyFilter:(state) => {
      state.filters.colorGreyFilter = state.filters.colorGreyFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(colorGreyFilter);

      state.products = renderAllActiveFilters();
    },
    filterColorBeigeFilter:(state) => {
      state.filters.colorBeigeFilter = state.filters.colorBeigeFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(colorBeigeFilter);

      state.products = renderAllActiveFilters();
    },
    filterColorDarkGreyFilter:(state) => {
      state.filters.colorDarkGreyFilter = state.filters.colorDarkGreyFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(colorDarkGreyFilter);

      state.products = renderAllActiveFilters();
    },
    filterMaterialRottang:(state) => {
      state.filters.materialRottangFilter = state.filters.materialRottangFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(materialRottangFilter);

      state.products = renderAllActiveFilters();
    },
    filterMaterialMetall:(state) => {
      state.filters.materialMetallFilter = state.filters.materialMetallFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(materialMetallFilter);

      state.products = renderAllActiveFilters();
    },
    filterMaterialWood:(state) => {
      state.filters.materialWoodFilter = state.filters.materialWoodFilter ? false : true;
      
      activeFilters = changeArrOfActiveFilters(materialWoodFilter);

      state.products = renderAllActiveFilters();
    },
    filterForSearch:(state) => {
      if (!activeFilters.includes(searchFilter)) {
        activeFilters.push(searchFilter)
      }

      state.products = renderAllActiveFilters();
    }
  },
});

export const selectItems = (state: RootState) => state.counter1.products;
export const selectedFilters = (state: RootState) => state.counter1.filters;
export const { filterTypeSofa, 
                filterTypeChair, 
                filterForSearch, 
                filterSizeOne,
                filterSizeTwo,
                filterColorBrownFilter,
                filterColorGreyFilter,
                filterColorBeigeFilter,
                filterColorDarkGreyFilter,
                filterMaterialRottang,
                filterMaterialMetall,
                filterMaterialWood,
                filterSizeThree } = counterSlice.actions;

export default counterSlice.reducer;
