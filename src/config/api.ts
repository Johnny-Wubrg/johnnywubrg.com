const baseUri = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
export const graphqlUri = baseUri + '/graphql';
export const restBaseUri = baseUri + '/wp-json';
export const restMtgUri = restBaseUri + '/wp-mtg/v1';