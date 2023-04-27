import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList, Review, Author } from './Reviews.styled';

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
    <ReviewsList>
      {movieArray.map(({ id, author, content }) => {
        const textWithoutParagraph = content;
        const textArray = textWithoutParagraph.split('\n');

        return (
          <Review key={id}>
            <Author>Author: {author}</Author>
            {textArray.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Review>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
