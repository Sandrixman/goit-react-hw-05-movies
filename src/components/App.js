import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';

import { Layout } from './Layout/Layout';
import Mission from './Mission';
import Team from './Team';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
