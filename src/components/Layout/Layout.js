import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
