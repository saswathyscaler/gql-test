import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
});

// Optional: Add authentication to the Apollo context (e.g., for token handling)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token'); // Get token from localStorage
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Error handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      console.log(`GraphQL error: ${message}`);
    });
  }
  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

// Set up the Apollo client
const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
