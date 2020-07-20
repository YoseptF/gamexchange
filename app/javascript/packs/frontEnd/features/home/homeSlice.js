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
    title: 'Circle',
    hero: 'https://i.pinimg.com/originals/d6/9f/f8/d69ff8e43057ac2c01f6ca1b619f4c6a.jpg',
    logo: 'https://i.imgur.com/t9V2Plg.png',
    isLoggedIn: true,
    theme: {
      primary: '#ec5200',
      background: '#fff',
      subtitles: '#8d8d8d',
    },
    showCase: {
      subtitle: 'Simple Fast way to rent',
      title: 'Comfortable home form reliable people',
      data: [
        {
          image: 'https://i.imgur.com/VqlbCkS.png',
          title: 'All stats at your fingerprints at anytime',
          paragraph: 'You will have the best tools to manage and collect information about the houses. Full controll will save you from any unforseen situations and save you money and consumer relationships',
          reverse: true,
          hasButton: false,
          button: {
            text: 'Learn More',
            link: '/cat',
            external: false,
          },
        },
        {
          image: 'https://i.imgur.com/nzRuYm5.jpg',
          title: 'Only best places for your rest',
          paragraph: 'More than ten thousand houses at your disposal. Only the best and checked landlords.  We will find best place for you and the conditions for a safe transaction and comfortable stay.',
          reverse: false,
          hasButton: true,
          button: {
            text: 'start free',
            link: 'https://www.google.com',
            external: true,
          },
        },
      ],
    },
    testimonials: {
      title: 'Look what there have to say',
      subtitle: 'people are already enjoying the service',
      time: 3,
      data: [
        {
          image: avatars[0],
          name: names[0],
          title: 'Designer',
          text: 'circle was excellent service and very easy to use. I quickly found the first customer inmediatly.',
        },
        {
          image: avatars[1],
          name: names[1],
          title: 'Designer',
          text: 'circle was excellent service and very easy to use. I quickly found the first customer inmediatly.',
        },
        {
          image: avatars[2],
          name: names[2],
          title: 'Designer',
          text: 'circle was excellent service and very easy to use. I quickly found the first customer inmediatly.',
        },
        {
          image: avatars[3],
          name: names[3],
          title: 'Designer',
          text: 'circle was excellent service and very easy to use. I quickly found the first customer inmediatly.',
        },
        {
          image: avatars[4],
          name: names[4],
          title: 'Designer',
          text: 'circle was excellent service and very easy to use. I quickly found the first customer inmediatly.',
        },
      ],
    },
    buttons: [
      { text: 'sign in', isRounded: false, link: '/signin' },
      { text: 'sign up', isRounded: true, link: '/signup' },
    ],
  },
  reducers: {
    changeTitle: (state, action) => { state.title = action.payload; },
  },
});

export const { changeTitle } = homeSlice.actions;

export const selectTitle = state => state.home.title;
export const selectHero = state => state.home.hero;
export const selectLogginStatus = state => state.home.isLoggedIn;
export const selectButtons = state => state.home.buttons;
export const selectLogo = state => state.home.logo;
export const selectTheme = state => state.home.theme;
export const selectShowCase = state => state.home.showCase;
export const selectTestimonials = state => state.home.testimonials;

export default homeSlice.reducer;
