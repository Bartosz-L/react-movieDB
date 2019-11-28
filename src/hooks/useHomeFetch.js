import React, { useState, useEffect } from 'react';
import { API_URL } from 'config';

const API_KEY = process.env.REACT_APP_API_KEY;

export const useHomeFetch = () => {
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

  return [{ state, loading, isError }, fetchMovies];
};
