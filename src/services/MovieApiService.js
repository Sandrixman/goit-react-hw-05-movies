import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'bf6a0fae11fd4c107d4af2168346d5c6',
  page: 1,
};

export const fetchMovie = async movie_id => {
  const { data } = await axios(`movie/${movie_id}`);
  return data;
};

export const fetchCast = async movie_id => {
  const { data } = await axios(`movie/${movie_id}/credits`);
  return data;
};

export const fetchReviews = async movie_id => {
  const { data } = await axios(`movie/${movie_id}/reviews`);
  return data;
};

export const fetchPopularMovies = async () => {
  const { data } = await axios(`trending/movie/day`);
  return data;
};

export const querySearch = async query => {
  const { data } = await axios(`search/movie?query=${query}`);
  return data;
};
