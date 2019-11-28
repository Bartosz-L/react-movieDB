import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from 'components/styles/StyledSearchBar';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const searchMovie = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          name="searchMovie"
          id="searchMovie"
          onChange={searchMovie}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
