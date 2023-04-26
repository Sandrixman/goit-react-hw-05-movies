import axios from 'axios';

const MovieApiService = () => {
  const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  async function fetchMovie(movie_id) {
    const { data } = await axios(
      `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`
    );
    return data;
  }

  async function fetchCast(movie_id) {
    const { data } = await axios(
      `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    return data;
  }

  async function fetchReviews(movie_id) {
    const { data } = await axios(
      `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}`
    );
    return data;
  }

  async function fetchPopularMovie() {
    const { data } = await axios(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
    );
    return data;
  }

  async function querySearch(query) {
    const { data } = await axios(
      `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&page=1`
    );
    return data;
  }

  // async function fetchTrailer(id) {
  //   const { data } = await axios(
  //     `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`
  //   );
  //   return data;
  // }

  return {
    fetchMovie,
    fetchCast,
    fetchReviews,
    fetchPopularMovie,
    querySearch,
    // fetchTrailer,
  };
};

export default MovieApiService;
