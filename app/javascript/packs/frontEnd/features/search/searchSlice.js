const { createSlice } = require('@reduxjs/toolkit');

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    items: [
      {
        image: 'https://via.placeholder.com/100',
        score: 3,
        price: 3600,
        name: 'Beautiful family apaprtment',
        description: 'Newly rennocated rare studion on basement level with lots of light and luxury detail.',
        sellerId: 1,
      },
      {
        image: 'https://via.placeholder.com/100',
        score: 3,
        price: 3600,
        name: 'Beautiful family apaprtment',
        description: 'Newly rennocated rare studion on basement level with lots of light and luxury detail.',
        sellerId: 1,
      },
      {
        image: 'https://via.placeholder.com/100',
        score: 3,
        price: 3600,
        name: 'Beautiful family apaprtment',
        description: 'Newly rennocated rare studion on basement level with lots of light and luxury detail.',
        sellerId: 1,
      },
      {
        image: 'https://via.placeholder.com/100',
        score: 3,
        price: 3600,
        name: 'Beautiful family apaprtment',
        description: 'Newly rennocated rare studion on basement level with lots of light and luxury detail.',
        sellerId: 1,
      },
      {
        image: 'https://via.placeholder.com/100',
        score: 3,
        price: 3600,
        name: 'Beautiful family apaprtment',
        description: 'Newly rennocated rare studion on basement level with lots of light and luxury detail.',
        sellerId: 1,
      },
    ],
  },
  reducers: {},
});

export const selectItems = state => state.search.items;

export default searchSlice.reducer;
