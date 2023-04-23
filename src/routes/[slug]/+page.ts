import { error } from '@sveltejs/kit';

import { sendQuery } from '$lib/api/utils';

const gql = String.raw;
const query = gql`
		query getPageBySlug($slug: ID!) {
			page(id: $slug, idType: URI) {
				content
				title
				author {
					node {
						name
					}
				}
				seo {
					title
					description
				}
			}
		}
	`;

export async function load({ params }) {
	const { page: pageData } = await sendQuery(query, {
		slug: params.slug
	});

	if (!pageData?.title) {
		throw error(404, `Could not load ${params.slug}`);
	}

	return {
		page: pageData
	};
}
