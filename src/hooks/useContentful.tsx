const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export const useContentful = (query: string) => {
    window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then((data) => {
            data;
        })
        .catch((err) => {
            err;
        });
};
