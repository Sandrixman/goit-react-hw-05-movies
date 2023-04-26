import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummy from '../../images/dummy-poster.jpg';

import MovieApiService from 'services/MovieApiService';

const { fetchCast } = MovieApiService();

const Cast = () => {
  const { movieId } = useParams();
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(response => setMovieArray([...response.cast]))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {movieArray.map(({ id, character, profile_path, name }) => {
        const actorImage = profile_path
          ? `https://image.tmdb.org/t/p/w92${profile_path}`
          : dummy;
        return (
          <div key={id}>
            <img src={actorImage} alt=""></img>
            <li>{name}</li>
            <p>{character}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Cast;
