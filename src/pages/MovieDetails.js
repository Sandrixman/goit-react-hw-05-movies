import { useParams } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { fetchMovie } from 'services/MovieApiService';
import MovieCardSleketon from 'components/MovieCard/MovieCardSleketon';
const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(movieId)
      .then(setMovie)
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {movie.title && (
        <Suspense fallback={<MovieCardSleketon />}>
          <MovieCard movie={movie} />
        </Suspense>
      )}
    </>
  );
};

export default MovieDetails;
