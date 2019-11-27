import React, { useState, useEffect } from 'react';
import { API_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async endpoint => {
    setIsError(false);
    setLoading(true);

    try {
      const response = await fetch(endpoint);
      const result = await response.json();

      setState(prevState => ({
        ...prevState,
        movies: [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.total_pages,
      }));
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;
    fetchMovies(url);
  }, []);

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
