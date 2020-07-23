/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as S from '../presentational/SignIn.styles';
import { selectuserData, updateUserData } from '../../features/sign/signSlice';
import { selectLogginStatus } from '../../features/home/homeSlice';

const Sign = () => {
  const location = useLocation();
  const title = location.pathname.split('').splice(1);
  const formatedTitle = `${title.slice(0, 4).join('')} ${title.slice(4).join('')}`;
  const authenticityToken = document.querySelector('meta[name="csrf-token"]').content;
  const isLoggedin = useSelector(selectLogginStatus);
  const history = useHistory();

  if (isLoggedin) history.push('/search');

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
        <h2>Hello there! Sign in and start managing your system</h2>
        <form action={location.pathname} acceptCharset="UTF-8" method="post">
          <input type="hidden" name="authenticity_token" value={authenticityToken} />
          {formatedTitle === 'sign up'
          && (
          <>
            <label htmlFor="user_name">Username</label>
            <input id="user_name" type="text" name="user[name]" value={userData.name} onChange={handleChange} />
          </>
          )}
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user[email]" id="user_email" value={userData.email} onChange={handleChange} />
          <label htmlFor="user_password">Password</label>
          <input type="password" name="user[password]" id="user_password" value={userData.password} onChange={handleChange} />
          {formatedTitle === 'sign up' && (
            <>
              <label htmlFor="user_password">Password</label>
              <input type="password" name="user[password_confirmation]" id="user_password_confirmation" value={userData.password_confirmation} onChange={handleChange} />
            </>
          )}
          <input type="submit" value="Sign In" />
        </form>
      </S.SignInBox>
    </S.Container>
  );
};

export default Sign;
