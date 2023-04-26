import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieApiService from 'services/MovieApiService';

const { fetchReviews } = MovieApiService();

const Reviews = () => {
  const { movieId } = useParams();
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(response => setMovieArray([...response.results]))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {movieArray.map(({ id, author, content }) => {
        return (
          <div key={id}>
            <li>Author: {author}</li>
            <p>{content}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Reviews;
