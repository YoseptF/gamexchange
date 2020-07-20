import React from 'react';
import PropTypes, { element } from 'prop-types';
import * as S from './Home.styles';

const Section = ({ title, subtitle, children }) => (
  <S.Section>
    <h2>{subtitle}</h2>
    <h1>{title}</h1>
    {children}
  </S.Section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(element).isRequired,
};

export default Section;
