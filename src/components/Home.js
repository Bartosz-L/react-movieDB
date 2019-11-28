import React from 'react';
import HeroImage from 'components/elements/HeroImage';
import SearchBar from 'components/elements/SearchBar';
import Grid from 'components/elements/Grid';
import MovieThumb from 'components/elements/MovieThumb';
import Spinner from 'components/elements/Spinner';
import LoadMoreBtn from 'components/elements/LoadMoreBtn';
import { useHomeFetch } from 'hooks/useHomeFetch';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [{ state, loading, isError }, fetchMovies] = useHomeFetch();

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
