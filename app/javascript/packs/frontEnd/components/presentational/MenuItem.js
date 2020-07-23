import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Home.styles';

const MenuItem = ({ text, rounded, link }) => (
  <S.MenuItem rounded={rounded}>
    <Link to={link}>{text}</Link>
  </S.MenuItem>
);

MenuItem.defaultProps = {
  rounded: false,
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default MenuItem;
