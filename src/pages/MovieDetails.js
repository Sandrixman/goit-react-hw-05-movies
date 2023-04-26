import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieApiService from 'services/MovieApiService';
import dummy from '../images/dummy-poster.jpg';

const { fetchMovie } = MovieApiService();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const fullposterPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w92${movie.backdrop_path}`
    : dummy;

  useEffect(() => {
    fetchMovie(movieId)
      .then(({ backdrop_path, genres, title, overview }) => {
        setMovie({
          backdrop_path,
          genres,
          title,
          overview,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {movie.title && (
        <>
          <Link to={backLinkHref}>Go back</Link>
          <div>
            <img src={fullposterPath} alt={movie.title} />
            <div>${movie.title}</div>
          </div>
          <div>Additional Information</div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
