import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const httpLink = new HttpLink({
    uri,
    fetch,
    headers: {
        authorization: `Bearer ${TOKEN}`,
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
