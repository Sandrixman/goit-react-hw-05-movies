import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const MovieApiService = () => {
  const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
  const BASE_URL = 'https://api.themoviedb.org/3/';

  const [curPage, setCurPage] = useState(1);

  async function downloadGenresIdList(searchQuery, searchPage) {
    const { data } = await axios(
      `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
    );
    return data.genres;
  }

  function fetchSearch(additionalUrl) {
    return axios(
      `${BASE_URL}${additionalUrl}?api_key=${API_KEY}&page=${curPage}`
    );
  }

  async function querySearch(query) {
    const searchMoviePath = 'search/movie';
    const { data } = await axios(
      `${BASE_URL}${searchMoviePath}?query=${query}&api_key=${API_KEY}&page=${curPage}`
    );
    return data;
  }

  async function fetchTrailer(id) {
    const { data } = await axios(
      `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`
    );
    return data;
  }
};

MovieApiService.proptypes = {
  searchQuery: PropTypes.string.isRequired,
  searchPage: PropTypes.number.isRequired,
};

export default MovieApiService;
