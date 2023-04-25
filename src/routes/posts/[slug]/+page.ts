import { error } from '@sveltejs/kit';

import { sendQuery } from '$lib/api/utils';
import DefaultPostTemplate from '@/templates/posts/default.svelte';
import { getPostQuery } from '$lib/api/queries/posts';

const resolveTemplate = async (slugs: string[]) => {
	for (const slug of slugs) {
		try {
			const { default: template } = await import(`../../../templates/posts/${slug}.svelte`);
			return template;
		} catch {
			continue;
		}
	}
	
	return DefaultPostTemplate;
};

export const prerender = false;
export async function load({ params }) {
	const { post } = await sendQuery(getPostQuery, {
		slug: params.slug
	});

	if (!post) {
		throw error(404, `Not found: ${params.slug}`);
	}

	const categories = post.categories?.nodes?.map((category) => category.slug) ?? [];

	return {
		slug: params.slug,
		post,
		template: await resolveTemplate(categories)
	};
}
