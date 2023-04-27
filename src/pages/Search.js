import Searchbar from 'components/Searchbar/Searchbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Search = () => {
  return (
    <>
      <Searchbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Search;
