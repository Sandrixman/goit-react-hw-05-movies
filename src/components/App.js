import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';
const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
