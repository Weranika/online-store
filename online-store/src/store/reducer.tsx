import type { Reducer } from '@reduxjs/toolkit';
import Products from '../components/products';
import ProductItem from '../backend/productItem';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

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
 // status: 'idle',
};

export const counterSlice = createSlice({
  name: 'prodlist',
  initialState,
  reducers: {
    // filter: (state, action: PayloadAction<(p:ProductItem) => boolean>) => {
    //   state.products = state.products.filter(p => action.payload(p));
    // },
    filterTypeChair:(state) => {
      state.filters.typeChairFilter = state.filters.typeChairFilter ? false : true;
      if (state.filters.typeChairFilter === true) {
        state.products = state.products.filter(item => {
          console.log(item.type);
          return item.type === 'Sofa'
        })
      }
    }
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.counter1.products;
export const { filterTypeChair,  } = counterSlice.actions;

export default counterSlice.reducer;
