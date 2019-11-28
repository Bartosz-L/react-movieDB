import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMovieThumb } from 'components/styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="movie_thumb" />
      </Link>
    ) : (
      <img src={image} alt="movie_thumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
