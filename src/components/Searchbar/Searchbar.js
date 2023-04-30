import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { querySearch } from 'services/MovieApiService';
import MoviesList from 'components/MoviesList/MoviesList';

import {
  SearchBox,
  Form,
  SearchButton,
  ButtonSpan,
  FormInput,
} from './Seachbar.styled';

const Searchbar = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    querySearch(searchParams.get('query'))
      .then(response => {
        if (response.total_results === 0) {
          toast.error('incorrect query', {
            position: 'top-center',
          });
        }
        setMovieArray([...response.results]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchParams]);

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    query !== '' && setSearchParams({ query });
    setQuery('');
  };

  return (
    <>
      <SearchBox>
        <Form onSubmit={onSubmit}>
          <SearchButton type="submit">
            <ButtonSpan>Search</ButtonSpan>
          </SearchButton>

          <FormInput
            type="text"
            name="searchQuery"
            value={query}
            onChange={handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </Form>
      </SearchBox>
      <MoviesList movieArray={movieArray} />
    </>
  );
};

export default Searchbar;
