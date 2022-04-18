<script context="module" lang="ts">
	import { sendQuery } from '@/utils/api';
	import DefaultCategoryTemplate from '@/templates/categories/default.svelte';

	const gql = String.raw;
	const query = gql`
		query getCategoryBySlug($slug: ID!) {
			category(idType: SLUG, id: $slug) {
				name
				description
				slug
				posts {
					nodes {
						databaseId
						uri
						title
						excerpt
						date
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
					}
				}
			}
		}
	`;

	const resolveTemplate = async (category) => {
		try {
			const { default: template } = await import(
				`../../templates/categories/${category.slug}.svelte`
			);
			return template;
		} catch {
			return DefaultCategoryTemplate;
		}
	};

	export async function load({ params }) {
		const { category } = await sendQuery(query, {
			slug: params.slug
		});

		if (!category) {
			return {
				status: 404,
				error: new Error(`Could not load ${params.slug}`)
			};
		}

		return {
			props: {
				category,
				template: await resolveTemplate(category)
			}
		};
	}
</script>

<script>
	export let category;
	export let template;
</script>

<svelte:component this={template} {category} />
