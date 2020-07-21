import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Search.styles';

const SearchItem = ({
  name, score, image, description, sellerId, price, handleClick, id,
}) => (
  <S.SearchItem onClick={() => handleClick({
    name, score, image, description, sellerId, price, id,
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

SearchItem.defaultProps = {
  score: 1,
  sellerId: 1,
  price: 1,
  id: 1,
};

SearchItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number,
  sellerId: PropTypes.number,
  price: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number,
};

export default SearchItem;
