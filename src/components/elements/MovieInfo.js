import React from 'react';
import NoImage from 'images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from 'config';
import { StyledMovieInfo } from 'components/styles/StyledMovieInfo';
import MovieThumb from './MovieThumb';

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className="rating-director-year">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie.directors.lenght > 1 ? 's' : ''}</h3>
            {movie.directors.map(director => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
          <div className="year">
            <h3>RELEASE DATE</h3>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

export default MovieInfo;
