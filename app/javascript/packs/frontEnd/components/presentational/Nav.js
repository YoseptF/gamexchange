import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Home.styles';
import Menu from '../containers/Menu';

const Nav = ({
  title, logo,
}) => (
  <S.Nav>
    <Link to="/" className="logoCombo">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </Link>
    <Menu />
  </S.Nav>
);

Nav.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Nav;
