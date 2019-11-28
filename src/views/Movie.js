import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from 'components/elements/Navigation';
import MovieInfo from 'components/elements/MovieInfo';
import MovieInfoBar from 'components/elements/MovieInfoBar';
import Actor from 'components/elements/Actor';
import Grid from 'components/elements/Grid';
import Spinner from 'components/elements/Spinner';
import { useMovieFetch } from 'hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, loading, error] = useMovieFetch(movieId);

  return (
    <>
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
      <Spinner />
    </>
  );
};

export default Movie;
