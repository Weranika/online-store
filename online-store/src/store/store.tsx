import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer';

export const store = configureStore({
  reducer: {
    mainReducer: counterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
