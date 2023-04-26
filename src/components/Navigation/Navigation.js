import { Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/search">Search movie</StyledLink>
    </Nav>
  );
};

export default Navigation;
