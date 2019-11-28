import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from 'config';

export const useHomeFetch = () => {
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
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;
    fetchMovies(url);
  }, []);

  return [{ state, loading, isError }, fetchMovies];
};
