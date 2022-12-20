import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-fetch'
import { graphql, Link } from "gatsby"

export const client = new ApolloClient({
  uri: 'https://wp-bpm-minsk.bpm-cloud.by/graphql',
  cache: new InMemoryCache(),
});