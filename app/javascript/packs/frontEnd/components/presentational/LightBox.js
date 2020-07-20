/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import * as S from './Search.styles';

const LightBox = ({ info, close }) => (
  <S.LightBox active={info.name} image={info.image}>
    <div className="container">
      <i className="fas fa-times" onClick={() => close({})} />
      <div className="left">
        <div className="leftInfo">
          <div className="left">
            <h1>{info.name}</h1>
            <span>{'⭐'.repeat(info.score)}</span>
          </div>
          <div className="right">
            <span>{`$ ${info.price}`}</span>
            <br />
            <span>per month</span>
          </div>
        </div>
      </div>
      <div className="rigth">
        <h1>About this listing</h1>
        <p>{info.description}</p>
        <div className="favorite">
          <a href="/"><h1>Add to favorites</h1></a>
        </div>
      </div>
    </div>
  </S.LightBox>
);

LightBox.propTypes = {
  info: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  close: PropTypes.func.isRequired,
};
export default LightBox;
