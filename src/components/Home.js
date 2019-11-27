import React, { useState } from 'react';
import { API_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
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
