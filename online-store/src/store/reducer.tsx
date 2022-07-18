import type { Reducer } from '@reduxjs/toolkit';
import Products from '../components/products';
import ProductItem from '../backend/productItem';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { inputAdornmentClasses } from '@mui/material';
interface Filters{
  typeSofaFilter: boolean,// undefined | ((p:ProductItem) => boolean)
  typeChairFilter: boolean
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
  }
};

let activeFilters:Array<(a:ProductItem) => boolean> = [];

const sofaFilter = (item:ProductItem) => item.type === 'Sofa';
const chairFilter = (item:ProductItem) => item.type === 'Chair';

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
    filterForSearch:(state) => {
      if (!activeFilters.includes(searchFilter)) {
        activeFilters.push(searchFilter)
      }

      state.products = renderAllActiveFilters();
    }
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.counter1.products;
export const selectedFilters = (state: RootState) => state.counter1.filters;
export const { filterTypeSofa, filterTypeChair, filterForSearch } = counterSlice.actions;

export default counterSlice.reducer;
