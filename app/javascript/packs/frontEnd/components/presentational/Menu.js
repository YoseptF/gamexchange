import React from 'react';
import PropTypes, { objectOf, oneOfType } from 'prop-types';
import uid from 'uid';
import * as S from './Home.styles';
import MenuItem from './MenuItem';

const Menu = ({ buttons, isLoggedIn }) => (
  <S.Menu>
    <MenuItem
      text="🔍 Search"
      link="/search"
    />
    { isLoggedIn
    && (
    <MenuItem
      text="🙋‍♂️ User"
      link="/user"
    />
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

Menu.defaultProps = {
  isLoggedIn: false,
};

Menu.propTypes = {
  buttons: PropTypes.arrayOf(objectOf(oneOfType([PropTypes.bool, PropTypes.string]))).isRequired,
  isLoggedIn: PropTypes.bool,
};

export default Menu;
