import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.styles';

const SearchItem = ({
  name, score, image, description, sellerId, price, handleClick,
}) => (
  <S.SearchItem onClick={() => handleClick({
    name, score, image, description, sellerId, price,
  })}
  >
    <img src={image} alt={name} />
    <div className="infoBox">
      <div className="left">
        <h1>{name}</h1>
        <span>{'⭐'.repeat(score)}</span>
      </div>
      <div className="rigth">
        <span>{`$ ${price}`}</span>
        <br />
        <span>per month</span>
      </div>
    </div>
  </S.SearchItem>
);

SearchItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  sellerId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchItem;
