import { error } from '@sveltejs/kit';

import { sendQuery } from '$lib/api/utils';
import DefaultCategoryTemplate from '@/templates/categories/default.svelte';
import { getCategoryQuery } from '$lib/api/queries/categories.js';

const resolveTemplate = async (category) => {
	try {
		const { default: template } = await import(
			`../../../templates/categories/${category.slug}.svelte`
		);
		return template;
	} catch {
		return DefaultCategoryTemplate;
	}
};

export const prerender = false;
export async function load({ params }) {
	const { category } = await sendQuery(getCategoryQuery, {
		slug: params.slug
	});

	if (!category) {
		throw error(404, `Could not load ${params.slug}`);
	}

	return {
		category,
		template: await resolveTemplate(category)
	};
}
