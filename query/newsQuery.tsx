import { gql } from '@apollo/client';

export const GET_NEWS = gql`
    query {
        testCollection {
            items {
                title
                body {
                    json
                }
            }
        }
    }
`;
