import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as S from '../presentational/SignIn.styles';
import { selectuserData, updateUserData } from '../../features/sign/signSlice';

const Sign = () => {
  const location = useLocation();
  const title = location.pathname.split('').splice(1);
  const formatedTitle = `${title.slice(0, 4).join('')} ${title.slice(4).join('')}`;
  const authenticityToken = document.querySelector('meta[name="csrf-token"]').content;

  const dispatch = useDispatch();
  const userData = useSelector(selectuserData);

  const handleChange = e => {
    const field = e.target.id.slice(5);
    const { value } = e.target;
    dispatch(updateUserData({ [field]: value }));
  };

  return (
    <S.Container>
      <S.SignInBox>
        <h1>{formatedTitle}</h1>
        <h2>Hello there! Sign in and strat managing your system</h2>
        <form action={location.pathname} acceptCharset="UTF-8" method="post">
          <input type="hidden" name="authenticity_token" value={authenticityToken} />
          {formatedTitle === 'sign up'
          && <input type="text" name="user[name]" id="user_name" value={userData.name} onChange={handleChange} />}
          <input type="email" name="user[email]" id="user_email" value={userData.email} onChange={handleChange} />
          <input type="password" name="user[password]" id="user_password" value={userData.password} onChange={handleChange} />
          {formatedTitle === 'sign up'
          && <input type="password" name="user[password_confirmation]" id="user_password_confirmation" value={userData.password_confirmation} onChange={handleChange} />}
          <input type="submit" value="Sign In" onClick={e => e.target.preventDefault()} />
        </form>
      </S.SignInBox>
    </S.Container>
  );
};

export default Sign;
