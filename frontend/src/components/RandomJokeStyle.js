import styled from 'styled-components'

export const BackButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const RefreshButton = styled(BackButton)`
  color: tomato;
  border-color: tomato;
`;

export const RandomJokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

export const Header = styled.h1`
  text-shadow: 2px 2px 5px red;
  font-size: 2em;
`;

export const RandomJoke = styled.p`
  font-family: 'Comic Neue';
`;

