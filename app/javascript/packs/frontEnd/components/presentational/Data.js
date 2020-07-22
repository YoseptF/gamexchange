import React from 'react';
import PropTypes, { string } from 'prop-types';
import * as S from './Home.styles';

const Data = ({
  image, paragraph, title, reverse, button, hasButton,
}) => (
  <S.Data reverse={reverse} image={image}>
    <div className="image" />
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
  button: PropTypes.objectOf(string),
  hasButton: PropTypes.bool,
};

export default Data;
