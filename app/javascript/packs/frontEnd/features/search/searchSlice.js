const { createSlice } = require('@reduxjs/toolkit');

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    items: [
      {
        image: '',
        score: null,
        price: null,
        name: '',
        description: '',
        sellerId: null,
      },
    ],
    pages: null,
  },
  reducers: {
    updateItems: (state, action) => action.payload,
  },
});

export const { updateItems } = searchSlice.actions;

export const selectItems = state => state.search.items;
export const selectPages = state => state.search.pages;

export default searchSlice.reducer;
