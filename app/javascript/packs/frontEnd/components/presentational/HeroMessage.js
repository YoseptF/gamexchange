import React from 'react';
import PropTypes, { string } from 'prop-types';
import * as S from './Home.styles';

const HeroMessage = ({
  heroBox,
}) => (
  <S.HeroMessage>
    <h1>{heroBox.title}</h1>
    <p>
      {heroBox.message}
    </p>
    <S.Button to={heroBox.link}>{heroBox.button}</S.Button>
  </S.HeroMessage>
);

HeroMessage.propTypes = {
  heroBox: PropTypes.objectOf(string).isRequired,
};

export default HeroMessage;
