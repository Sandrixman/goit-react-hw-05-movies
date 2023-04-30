import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorsList, Actor } from './Cast.styled';
import dummy from '../../images/dummy-poster.jpg';

import { fetchCast } from 'services/MovieApiService';

const Cast = () => {
  const { movieId } = useParams();
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(response => setMovieArray([...response.cast]))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ActorsList>
      {movieArray.map(({ id, character, profile_path, name }) => {
        const actorImage = profile_path
          ? `https://image.tmdb.org/t/p/w92${profile_path}`
          : dummy;
        return (
          <Actor key={id}>
            <img src={actorImage} alt=""></img>
            <p>{name}</p>
            <p>{character}</p>
          </Actor>
        );
      })}
    </ActorsList>
  );
};

export default Cast;
