import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from '../presentational/SignIn.styles';

const Sign = () => {
  const location = useLocation();
  const title = location.pathname.split('').splice(1);
  const formatedTitle = `${title.slice(0, 4).join('')} ${title.slice(4).join('')}`;
  return (
    <S.Container>
      <S.SignInBox>
        <h1>{formatedTitle}</h1>
        <h2>Hello there! Sign in and strat managing your system</h2>
        <form>
          <input type="email" />
          <input type="password" />
          <input type="submit" value="Sign In" />
        </form>
      </S.SignInBox>
    </S.Container>
  );
};

export default Sign;
