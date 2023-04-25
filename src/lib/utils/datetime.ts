export const formatDate = (dateTimeString: string) => {
	const date = new Date(dateTimeString);
	return date.toLocaleDateString();
};

export const formatDateTime = (dateTimeString: string) => {
	const date = new Date(dateTimeString + 'Z');
	return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};
