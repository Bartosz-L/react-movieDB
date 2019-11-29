import React from 'react';
import PropTypes from 'prop-types';
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

MovieThumb.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  clickable: PropTypes.bool.isRequired,
};

export default MovieThumb;
