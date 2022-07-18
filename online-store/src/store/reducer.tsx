import type { Reducer } from '@reduxjs/toolkit';
import Products from '../components/products';
import ProductItem from '../backend/productItem';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { inputAdornmentClasses } from '@mui/material';
interface Filters{
  typeChairFilter: boolean// undefined | ((p:ProductItem) => boolean)
}
interface prodI{
  products : Array<ProductItem>,
  filters : Filters
}

const initialState:prodI  = {
  products : Products.getProducts(),
  filters : {typeChairFilter:false}
};

let activeFilters:Array<(a:ProductItem) => boolean> = [];

const sofaFilter = (item:ProductItem) => item.type === 'Sofa';
const searchFilter = (item:ProductItem) => {
const input = (document.getElementById('input') as HTMLInputElement).value;
return item.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0;
}

export const counterSlice = createSlice({
  name: 'prodlist',
  initialState,
  reducers: {
    // filter: (state, action: PayloadAction<(p:ProductItem) => boolean>) => {
    //   state.products = state.products.filter(p => action.payload(p));
    // },
    filterTypeSofa:(state) => {
      state.filters.typeChairFilter = state.filters.typeChairFilter ? false : true;
      // if (state.filters.typeChairFilter === true) {
      //   state.products = state.products.filter(sofaFilter);
      // }
      if (activeFilters.includes(sofaFilter)) {
        activeFilters = activeFilters.filter(elem => elem !== sofaFilter);
      } else {
        activeFilters.push(sofaFilter);
      }
      state.products = state.products.filter(elem => {
        for (let i = 0; i < activeFilters.length; i++) {
          if (activeFilters[i](elem) === false) {
            return false;
          }
        }
        return true;
      });
    },
    filterForSearch:(state) => {
      state.products = state.products.filter(searchFilter);
      if (state.products.length === 0) {
        window.alert("Sorry,no matches found");
      }
    }
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.counter1.products;
export const selectedFilters = (state: RootState) => state.counter1.filters;
export const { filterTypeSofa, filterForSearch } = counterSlice.actions;

export default counterSlice.reducer;
