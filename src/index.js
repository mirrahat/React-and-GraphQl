import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  createHttpLink,
  gql
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.apito.io/secured/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = '6rZvWY1K4jgvV6WNVR93c7RXxXeI6CwetOZv23K6sGbu3VhRIAEA2Zb3wlsDCqIaMAjkxyKA9ABNYIKKwl2HgxvQYSxtQqkGVlW0VuR4ugGHWx0LFQvCotao0jfaFIg8T0oBcyCvylRs5NRcAY5L3ho5wQObODx';

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
