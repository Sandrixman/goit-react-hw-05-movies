import { Link, useLocation } from 'react-router-dom';
import { Movies, MoviesListItem } from './MoviesList.styled';

const MoviesList = ({ movieArray }) => {
  const location = useLocation();

  return (
    <Movies>
      {movieArray.map(({ id, title }) => {
        return (
          <MoviesListItem key={id}>
            <Link to={`/search/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MoviesListItem>
        );
      })}
    </Movies>
  );
};

export default MoviesList;
