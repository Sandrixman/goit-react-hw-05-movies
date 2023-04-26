import { useEffect, useState } from 'react';
import MovieApiService from 'services/MovieApiService';
import MoviesList from 'components/MoviesList/MoviesList';

const { fetchPopularMovie } = MovieApiService();

const FetchPopularMovies = () => {
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    fetchPopularMovie()
      .then(response => setMovieArray([...response.results]))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movieArray={movieArray} />
    </>
  );
};

export default FetchPopularMovies;
