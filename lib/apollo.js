// Add Apollo Client to this file
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client;

/* getApolloClient */
export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/** createApolloClient*/
export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.WORDPRESS_API_URL
    }),
    cache: new InMemoryCache(),
  });
}

const cache = new InMemoryCache({
  typePolicies: {
    Language: {
      keyFields: ["es", "en"],
    },
  },
});

