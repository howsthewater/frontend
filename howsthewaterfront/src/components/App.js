import React from "react";
import "../styles/App.css";
import Search from "./Search";

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'howsthewaterfeature.herokuapp.com/graphql'
});

function GetLocations() {
  const { loading, error, data } = useQuery(gql`
    {

    }
  `)
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>How's The Water</h1>
        <Search />
      </div>
    </ApolloProvider>
  );
};

export default App;
