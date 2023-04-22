import { error } from '@sveltejs/kit';

export const prerender = true;
import { sendQuery } from '@/utils/api';
import DefaultPostTemplate from '@/templates/posts/default.svelte';

const gql = String.raw;
const query = gql`
		query getPostBySlug($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				date
				title
				content
				author {
					node {
						name
					}
				}
				categories {
					nodes {
						name
						slug
					}
				}
				featuredImage {
					node {
						sourceUrl
						altText
						mediaDetails {
							width
							height
						}
						mediaSettings {
							artistCredit
						}
					}
				}
				featuredCardSettings {
					featuredCard
				}
				seo {
					title
					description
				}
			}
		}
	`;

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

export async function load({ params }) {
	const { post } = await sendQuery(query, {
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
