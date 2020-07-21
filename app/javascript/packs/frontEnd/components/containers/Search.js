import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uid from 'uid';
import { useLocation, useHistory, Link } from 'react-router-dom';
import {
  selectItems, updateItems, selectPages, selectLikes, addLike, removeLike,
} from '../../features/search/searchSlice';
import * as S from '../presentational/Search.styles';
import SearchItem from '../presentational/SearchItem';
import LightBox from '../presentational/LightBox';

const Search = () => {
  const items = useSelector(selectItems);
  const pages = useSelector(selectPages);
  const likes = useSelector(selectLikes);

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

  const updateLike = async e => {
    const url = '/api/v1/like';
    const { value } = e.target.dataset;
    const data = { id: e.target.dataset.value };
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute('content');
    const { liked } = e.target.dataset;
    if (liked === 'true') {
      try {
        await fetch(`${url}/${value}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf,
          },
        });
        dispatch(removeLike(parseInt(value, 10)));
      } catch (e) {
        history.push('/');
      }
    } else {
      try {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf,
          },
          body: JSON.stringify(data),
        });
        dispatch(addLike(parseInt(value, 10)));
      } catch (e) {
        history.push('/');
      }
    }
  };

  return (
    <S.Search currentTab={currentTab}>
      <LightBox info={lightBoxInfo} close={setInfo} updateLike={updateLike} likes={likes} />
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
            id={item.id}
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
