import { error } from '@sveltejs/kit';

import { sendQuery } from '$lib/api/utils';
import { getPageQuery } from '$lib/api/queries/pages.js';

export async function load({ params }) {
	const { page: pageData } = await sendQuery(getPageQuery, {
		slug: params.slug
	});

	if (!pageData?.title) {
		throw error(404, `Could not load ${params.slug}`);
	}

	return {
		page: pageData
	};
}
