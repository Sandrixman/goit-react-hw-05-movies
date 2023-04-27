import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  border: 1px solid;
  border-radius: 10px;
  padding: 2px 10px;
  margin-bottom: 5px;
  gap: 5px;
  align-items: center;
  color: black;
  text-decoration: none;
  :hover {
    color: orange;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 25px;
`;

export const MovieDescr = styled.div`
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.div`
  padding: 20px;
`;
