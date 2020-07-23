/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const signSlice = createSlice({
  name: 'sign',
  initialState: {
    userData: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

export const { updateUserData } = signSlice.actions;

export const selectuserData = state => state.sign.userData;

export default signSlice.reducer;
