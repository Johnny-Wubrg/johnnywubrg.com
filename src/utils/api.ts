export const sendQuery = async (query: string, variables: Record<string, string> = {}) => {
	const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
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
