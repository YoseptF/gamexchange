import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    search: searchReducer,
  },
});
