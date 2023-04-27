import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  StyledLink,
  MovieInfo,
  MovieDescr,
  AdditionalInfo,
} from './MovieCard.styled';
import PropTypes from 'prop-types';
import dummy from '../../images/dummy-poster.jpg';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const fullposterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : dummy;

  const genres = [];
  for (const genre of movie.genres) {
    genres.push(genre.name);
  }

  return (
    <>
      {movie.title && (
        <>
          <StyledLink to={backLinkHref.current}>
            <FaArrowAltCircleLeft />
            Go back
          </StyledLink>
          <MovieInfo>
            <img src={fullposterPath} alt={movie.title} />
            <div>
              <MovieDescr>
                <h2>{movie.title}</h2>
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
              </MovieDescr>
              <MovieDescr>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </MovieDescr>
              <MovieDescr>
                <h3>Genres</h3>
                <p>{genres.join(', ')}</p>
              </MovieDescr>
            </div>
          </MovieInfo>
          <AdditionalInfo>
            <h3>Additional Information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AdditionalInfo>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

MovieCard.propType = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
