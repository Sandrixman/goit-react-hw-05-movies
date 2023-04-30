import { Suspense, lazy } from 'react';
import Loader from '../components/Loader/Loader';

const FetchPopularMovies = lazy(() =>
  import('components/FetchPopularMovies/FetchPopularMovies')
);

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <FetchPopularMovies />
      </Suspense>
    </>
  );
};

export default Home;
