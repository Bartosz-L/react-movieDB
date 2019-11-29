import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from 'config';

export const useHomeFetch = searchTerm => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async endpoint => {
    setIsError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const response = await fetch(endpoint);
      const result = await response.json();

      setState(prevState => ({
        ...prevState,
        movies:
          isLoadMore !== -1
            ? [...prevState.movies, ...result.results]
            : [...result.results],
        heroImage: prevState.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem('homeState', JSON.stringify(state));
    }
  }, [searchTerm, state]);
  return [{ state, loading, isError }, fetchMovies];
};
