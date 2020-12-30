import React from "react";
//import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Categories from './components/Categories';
import RandomJoke from './components/RandomJoke';
import './App.css';

   const client = new ApolloClient({
      uri: '/graphql',
      cache: new InMemoryCache()
    });

function App() {

  // const [client, setClient] = useState(null);

  // useEffect(() => {

  //   const client = new ApolloClient({
  //     uri: '/graphql',
  //   });

    

  //   setClient(client);
  // }, []);
  // if (!client) {
  //   return <h4>Loading...</h4>;
  // }
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="container">

        <Route exact path="/" component={Categories} />
        <Route exact path="/categories/:category" component={RandomJoke} />
        
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
