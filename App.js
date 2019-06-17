import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Layouts from './components/Layouts';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjuibv7et3llg01cswnhrmphb/master',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Layouts />
  </ApolloProvider>
);

export default App;
