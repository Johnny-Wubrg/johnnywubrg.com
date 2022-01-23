import { graphqlUri, restMtgUri } from '@/config/api';

export const sendQuery = async (query: string, variables: Record<string, string> = {}) => {
	const response = await fetch(graphqlUri, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

  if (!response.ok) {
    throw new Error('Cannot load resource.');
  }
  
	const responseObj = await response.json();
	return responseObj.data;
};

export const getCardImageUri = (id: string) => `${restMtgUri}/cards/${id}/image.png`;