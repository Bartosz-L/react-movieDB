import React from 'react';
import HeroImage from 'components/elements/HeroImage';
import SearchBar from 'components/elements/SearchBar';
import Grid from 'components/elements/Grid';
import MovieThumb from 'components/elements/MovieThumb';
import Spinner from 'components/elements/Spinner';
import LoadMoreBtn from 'components/elements/LoadMoreBtn';
import { useHomeFetch } from 'hooks/useHomeFetch';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from 'config';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [{ state, loading, isError }, fetchMovies] = useHomeFetch();

  if (isError) return <div>Something went wrong...</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
