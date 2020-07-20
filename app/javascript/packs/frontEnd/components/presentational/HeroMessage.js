import React from 'react';
import * as S from './Home.styles';

const HeroMessage = () => (
  <S.HeroMessage>
    <h1>Find housing anywhere</h1>
    <p>
      The best Offers for you at any point of your journey.
      Wherever you are, feel yourself at your own home
    </p>
    <S.Button to="/signup">Start Free</S.Button>
  </S.HeroMessage>
);

export default HeroMessage;
