import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uid from 'uid';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { selectItems, updateItems, selectPages } from '../../features/search/searchSlice';
import * as S from '../presentational/Search.styles';
import SearchItem from '../presentational/SearchItem';
import LightBox from '../presentational/LightBox';

const Search = () => {
  const items = useSelector(selectItems);
  const pages = useSelector(selectPages);

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialSearch = async () => {
    const response = await fetch(`/api/v1/search${location.search}`);
    const json = await response.json();
    const { error } = json;
    if (error) {
      history.push('/search?page=1');
    } else {
      dispatch(updateItems(json));
    }
  };

  useEffect(() => {
    initialSearch();
  }, [location]);

  const [lightBoxInfo, setInfo] = useState({});
  const [currentTab, setTab] = useState(location.search ? location.search[location.search.length - 1] : 1);

  const handleClick = e => {
    setTab(e.target.dataset.value);
  };

  return (
    <S.Search currentTab={currentTab}>
      <LightBox info={lightBoxInfo} close={setInfo} />
      {items
      && items.map(item => (
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
      <div className="pagination">
        {pages
      && Array.from(Array(pages).keys()).map(index => (
        <div key={uid()}>
          <Link onClick={handleClick} data-value={index + 1} to={`/search?page=${index + 1}`}>{index + 1}</Link>
        </div>
      ))}
      </div>
    </S.Search>
  );
};

export default Search;
