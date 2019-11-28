import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from 'config';

export const useMovieFetch = movieId => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const movieEndpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const movieResponse = await fetch(movieEndpoint);
      const movieResult = await movieResponse.json();

      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResponse = await fetch(creditsEndpoint);
      const creditsResult = await creditsResponse.json();
      const directors = creditsResult.crew.filter(
        member => member.job === 'Director',
      );

      setMovie({
        ...movieResult,
        actors: creditsResult.cast,
        directors,
      });
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [movie, loading, error];
};
