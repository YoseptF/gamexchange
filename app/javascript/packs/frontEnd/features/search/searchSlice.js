/* eslint-disable no-param-reassign */
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
        id: null,
      },
    ],
    itemLike: [
      {
        image: '',
        score: null,
        price: null,
        name: '',
        description: '',
        sellerId: null,
        id: null,
      },
    ],
    likes: [],
    pages: null,
  },
  reducers: {
    updateItems: (state, action) => action.payload,
    addLike: (state, action) => { state.likes.push(parseInt(action.payload, 10)); },
    removeLike: (state, action) => {
      state.likes = state.likes.filter(item => (
        item !== parseInt(action.payload, 10)
      ));
    },
  },
});

export const { updateItems, addLike, removeLike } = searchSlice.actions;

export const selectItems = state => state.search.items;
export const selectPages = state => state.search.pages;
export const selectLikes = state => state.search.likes;
export const selectItemsLike = state => state.search.itemsLike;

export default searchSlice.reducer;
