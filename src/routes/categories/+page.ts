import { getCategoriesQuery } from '$lib/api/queries/categories';
import { sendQuery } from '$lib/api/utils';

export async function load() {
	const { categories } = await sendQuery(getCategoriesQuery);

	return {
		categories: categories.nodes
	};
}
