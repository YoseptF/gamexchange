import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import uid from 'uid';
import { selectItems } from '../../features/search/searchSlice';
import * as S from '../presentational/Search.styles';
import SearchItem from '../presentational/SearchItem';
import LightBox from '../presentational/LightBox';

const Search = () => {
  const items = useSelector(selectItems);
  const [lightBoxInfo, setInfo] = useState({});

  return (
    <S.Search>
      <LightBox info={lightBoxInfo} close={setInfo} />
      {items.map(item => (
        <SearchItem
          handleClick={setInfo}
          key={uid()}
          image={item.image}
          name={item.name}
          score={item.score}
          description={item.description}
          sellerId={item.sellerId}
          price={item.price}
        />
      ))}
    </S.Search>
  );
};

export default Search;
