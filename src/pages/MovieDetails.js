import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieApiService from 'services/MovieApiService';
import MovieCard from 'components/MovieCard/MovieCard';

const { fetchMovie } = MovieApiService();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(movieId)
      .then(({ poster_path, genres, title, overview, vote_average }) => {
        setMovie({
          poster_path,
          genres,
          title,
          overview,
          vote_average,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return <>{movie.title && <MovieCard movie={movie} />}</>;
};

export default MovieDetails;
