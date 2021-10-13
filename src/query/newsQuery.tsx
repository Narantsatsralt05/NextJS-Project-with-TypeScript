export const GET_NEWS = `
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
