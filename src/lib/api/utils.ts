import { graphqlUri, restMtgUri } from '$lib/config/api';
import type { GraphQuery } from '$lib/models';

export const sendQuery = async <T>(query: GraphQuery<T>, variables: Record<string, string> = {}): Promise<T> => {
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
		console.log(response);
		throw new Error('Cannot load resource.');
	}

	const responseObj = await response.json();
	return responseObj.data;
};

export const getCardImageUri = (id: string) => `${restMtgUri}/cards/${id}/image.png`;
