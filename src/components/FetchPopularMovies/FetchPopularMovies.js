import { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'services/MovieApiService';
import MoviesList from 'components/MoviesList/MoviesList';

const FetchPopularMovies = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchPopularMovies()
      .then(response => setMovieArray([...response.results]))
      .catch(() => setErrorMsg('Request error'));
  }, []);

  return (
    <>
      {movieArray.length > 0 && (
        <>
          <h1>Trending today</h1>
          <MoviesList movieArray={movieArray} />
        </>
      )}
      {errorMsg && <h2>{errorMsg}</h2>}
    </>
  );
};

export default FetchPopularMovies;
