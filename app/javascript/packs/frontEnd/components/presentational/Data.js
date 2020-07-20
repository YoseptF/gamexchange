import React from 'react';
import PropTypes, { any } from 'prop-types';
import * as S from './Home.styles';

const Data = ({
  image, paragraph, title, reverse, button, hasButton,
}) => (
  <S.Data reverse={reverse}>
    <img src={image} alt="dataImage" />
    <div className="dataBox">
      <h1>{title}</h1>
      <p>
        {paragraph}
      </p>
      {hasButton
      && (button.external ? <a href={button.link}>{button.text}</a>
        : <S.Button to={button.link}>{button.text}</S.Button>)}
    </div>
  </S.Data>
);

Data.defaultProps = {
  reverse: false,
  button: null,
  hasButton: false,
};

Data.propTypes = {
  image: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  button: PropTypes.objectOf(any),
  hasButton: PropTypes.bool,
};

export default Data;
