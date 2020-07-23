import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Home.styles';

const Testimonial = ({
  image, name, title, text,
}) => (
  <S.Testimonial name={name}>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h2>{title}</h2>
    <p>{text}</p>
  </S.Testimonial>
);

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Testimonial;
