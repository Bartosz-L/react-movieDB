import React from 'react';
import { StyledMovieThumb } from 'components/styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="movie_thumb" />
    ) : (
      <img src={image} alt="movie_thumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
