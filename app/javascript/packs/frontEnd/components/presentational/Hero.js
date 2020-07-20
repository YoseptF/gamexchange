import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Home.styles';
import HeroMessage from './HeroMessage';

const Hero = ({ image }) => (
  <S.Hero image={image}>
    <HeroMessage />
  </S.Hero>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Hero;
