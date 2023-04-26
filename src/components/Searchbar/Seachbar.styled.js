import styled from '@emotion/styled';
import searchIcon from './search.svg';

export const SearchBox = styled.div`
  width: 400px;
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  :focus-within {
    box-shadow: 0px 0px 0px 0px #ffa500, 3px 3px 10px 0px #ffa500,
      3px 3px 5px -5px #ffa500;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  background-image: url(${searchIcon});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const ButtonSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
