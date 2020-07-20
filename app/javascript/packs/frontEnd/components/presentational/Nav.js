import React from 'react';
import PropTypes, { objectOf, oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Home.styles';
import Menu from './Menu';

const Nav = ({
  title, logo, buttons, isLoggedIn,
}) => (
  <S.Nav>
    <Link to="/" className="logoCombo">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </Link>
    <Menu buttons={buttons} isLoggedIn={isLoggedIn} />
  </S.Nav>
);

Nav.defaultProps = {
  isLoggedIn: false,
};

Nav.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(objectOf(oneOfType([PropTypes.bool, PropTypes.string]))).isRequired,
  isLoggedIn: PropTypes.bool,
};

export default Nav;
