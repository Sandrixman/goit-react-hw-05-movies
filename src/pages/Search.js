import Searchbar from 'components/Searchbar/Searchbar';
import { Outlet } from 'react-router-dom';

const Search = () => {
  return (
    <>
      <Searchbar />
      <Outlet />
    </>
  );
};

export default Search;
