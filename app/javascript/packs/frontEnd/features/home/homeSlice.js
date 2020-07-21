/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import faker from 'faker';

const avatars = [
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
  faker.image.avatar(),
];

const names = [
  `${faker.name.firstName()} ${faker.name.lastName()}`,
  `${faker.name.firstName()} ${faker.name.lastName()}`,
  `${faker.name.firstName()} ${faker.name.lastName()}`,
  `${faker.name.firstName()} ${faker.name.lastName()}`,
  `${faker.name.firstName()} ${faker.name.lastName()}`,
];

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    title: '',
    hero: '',
    heroBox: {
      title: '',
      message: '',
      button: '',
      link: '',
    },
    logo: '',
    isLoggedIn: null,
    theme: {
      primary: '',
      background: '',
      subtitles: '',
    },
    showCase: {
      subtitle: '',
      title: '',
      data: [
        {
          image: '',
          title: '',
          paragraph: '',
          reverse: null,
          hasButton: null,
          button: {
            text: '',
            link: '',
            external: null,
          },
        },
        {
          image: '',
          title: '',
          paragraph: '',
          reverse: null,
          hasButton: null,
          button: {
            text: '',
            link: '',
            external: null,
          },
        },
      ],
    },
    testimonials: {
      title: '',
      subtitle: '',
      time: 3,
      data: [
        {
          image: '',
          name: '',
          title: '',
          text: '',
        },
      ],
    },
    buttons: [
      { text: '', isRounded: null, link: '' },
    ],
  },
  reducers: {
    setConfig: (state, action) => action.payload,
    updateTestimonials: (state, action) => { state.testimonials.data = action.payload; },
  },
});

export const { setConfig, updateTestimonials } = homeSlice.actions;

export const selectTitle = state => state.home.title;
export const selectHero = state => state.home.hero;
export const selectHeroBox = state => state.home.heroBox;
export const selectLogginStatus = state => state.home.isLoggedIn;
export const selectButtons = state => state.home.buttons;
export const selectLogo = state => state.home.logo;
export const selectTheme = state => state.home.theme;
export const selectShowCase = state => state.home.showCase;
export const selectTestimonials = state => state.home.testimonials;

export default homeSlice.reducer;
