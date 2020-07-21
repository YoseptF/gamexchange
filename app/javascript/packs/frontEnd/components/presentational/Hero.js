import React from 'react';
import PropTypes, { string } from 'prop-types';
import * as S from './Home.styles';
import HeroMessage from './HeroMessage';

const Hero = ({ image, heroBox }) => (
  <S.Hero image={image}>
    <HeroMessage heroBox={heroBox} />
  </S.Hero>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  heroBox: PropTypes.objectOf(string).isRequired,
};

export default Hero;
