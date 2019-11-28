import React, { useState } from 'react';
import HeroImage from 'components/elements/HeroImage';
import SearchBar from 'components/elements/SearchBar';
import Grid from 'components/elements/Grid';
import MovieThumb from 'components/elements/MovieThumb';
import Spinner from 'components/elements/Spinner';
import LoadMoreBtn from 'components/elements/LoadMoreBtn';
import { useHomeFetch } from 'hooks/useHomeFetch';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from 'config';
import NoImage from 'images/no_image.jpg';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      isError,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage +
      1}`;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage +
      1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (isError) return <div>Something went wrong...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => {
          return (
            <MovieThumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={handleLoadMoreMovies} />
      )}
    </>
  );
};

export default Home;
