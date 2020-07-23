import React from 'react';
import uid from 'uid';
import { useSelector } from 'react-redux';
import * as S from '../presentational/Home.styles';
import MenuItem from '../presentational/MenuItem';
import { selectButtons, selectLogginStatus } from '../../features/home/homeSlice';

const Menu = () => {
  const buttons = useSelector(selectButtons);
  const isLoggedIn = useSelector(selectLogginStatus);

  const Logout = async () => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute('content');

    try {
      await fetch('/logout', {
        method: 'DELETE',
        headers: {
          'X-CSRF-Token': csrf,
        },
      });
      window.location.reload();
    } catch (e) {
      console.log(e); // eslint-disable-line no-console
    }
  };

  return (
    <S.Menu>
      <MenuItem
        text="Search"
        link="/search"
      />
      { isLoggedIn
    && (
    <>
      <MenuItem
        text="User"
        link="/user"
      />
      <button type="button" href="/user" onClick={Logout}>
        Logout
      </button>
    </>
    )}
      { !isLoggedIn
    && buttons.map(button => (
      <MenuItem
        key={uid()}
        text={button.text}
        rounded={button.isRounded}
        link={button.link}
      />
    ))}
    </S.Menu>
  );
};

export default Menu;
