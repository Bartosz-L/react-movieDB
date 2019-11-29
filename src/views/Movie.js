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

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map(actor => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
