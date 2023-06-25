import { GraphQLClient } from "graphql-request";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = "https://graphqlzero.almansi.me/api";
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

export default client;
export const graphQLClient = new GraphQLClient(endpoint);
