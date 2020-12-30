import React from 'react';
import { useQuery } from '@apollo/client';
import { JOKE_QUERY } from '../data/queries';
import { Link, RouteComponentProps} from 'react-router-dom';
import { BackButton, RefreshButton, Header, RandomJokeContainer, RandomJoke } from './RandomJokeStyle.js'


type TParams = { category: string };

const Joke: React.FC = ({ match }: RouteComponentProps<TParams>) => {
  
  const { data, error, loading } = useQuery(JOKE_QUERY, {
    variables: {
      category: match.params.category,
    },
  });

  const refreshPage = () => {
    window.location.reload();
  }
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <RandomJokeContainer>
      <div>
        {loading ? (
          <h4> Loading... </h4>
        ) : (
            <div>
              <Header>Random Chuck Norris Joke</Header>
              <RandomJoke>{data.joke.value}</RandomJoke>
            </div>
          )}
        <Link to="/" > <BackButton>Back to categories</BackButton></Link>
        <RefreshButton onClick={() => refreshPage()}>Show another joke</RefreshButton>
       
      </div>
    </RandomJokeContainer>
  );
}


export default Joke;