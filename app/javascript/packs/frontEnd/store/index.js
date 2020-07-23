import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import searchReducer from '../features/search/searchSlice';
import signReducer from '../features/sign/signSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    search: searchReducer,
    sign: signReducer,
  },
});
