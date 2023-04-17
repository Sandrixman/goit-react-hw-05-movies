import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';

export const Layout = () => {
  return (
    <Container>
      <Searchbar />
      <Outlet />
    </Container>
  );
};
