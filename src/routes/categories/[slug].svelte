<script context="module" lang="ts">
	import { sendQuery } from '@/utils/api';

	const gql = String.raw;
	const query = gql`
		query getCategoryBySlug($slug: ID!) {
			category(idType: SLUG, id: $slug) {
				name
				description
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
							}
						}
					}
				}
			}
		}
	`;

	export async function load({ page }) {
		const { category } = await sendQuery(query, {
			slug: page.params.slug
		});

		if (!category) {
			return {
				status: 404,
				error: new Error(`Could not load ${page.params.slug}`)
			};
		}

		return {
			props: {
				category
			}
		};
	}
</script>

<script>
	import PostList from '@/components/PostList.svelte';
	import { getContext } from 'svelte';
	export let category;
	const title = getContext('siteTitle');
</script>

<svelte:head>
	<title>
		{title} | {category.name}
	</title>
	{#if category.description}
		<meta name="description" content={category.description} />
	{/if}
</svelte:head>

<div class="content-wrap">
	<div class="content-main">
		<div class="category-info">
			<h1>{category.name}</h1>
			{#if category.description}
				<p>{category.description}</p>
			{/if}
		</div>
		<PostList posts={category.posts.nodes} />
	</div>
</div>

<style lang="scss">
	.category-info {
		margin-bottom: 2em;
		h1,
		p {
			margin: 0;
		}
	}
</style>
