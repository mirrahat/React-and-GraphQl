import './App.css';
import Router from './Router'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  createHttpLink,
  gql
} from "@apollo/client";
import  GetUsers from './component/GetUsers';
import { onError } from "@apollo/client/link/error";


import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from 'react-router-dom';

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

function App() {
  return (
       <ApolloProvider client={client}>
      {" "}
     <Router/>
    
    </ApolloProvider>
  
 
  );
}

export default App;
