<script context="module" lang="ts">
	import { sendQuery } from '@/utils/api';

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

	export async function load({ page }) {
		const { page: pageData } = await sendQuery(query, {
			slug: page.params.slug
		});

		if (!pageData?.title) {
			return {
				status: 404,
				error: new Error(`Could not load ${page.params.slug}`)
			};
		}

		return {
			props: {
				page: pageData
			}
		};
	}
</script>

<script>
	import { getContext } from 'svelte';
	export let page;
	const title = getContext('siteTitle');
</script>

<svelte:head>
	{#if page.seo?.title}
		<title>{page.seo.title}</title>
	{:else}
		<title>{title} | {page.title}</title>
	{/if}

	{#if page.seo?.description}
		<meta name="description" content={page.seo.description} />
	{/if}

	<meta name="author" content={page.author.node.name} />
</svelte:head>

<div class="content-wrap">
	<div class="content-main">
		<div class="category-info">
			<h1>{page.title}</h1>
			{#if page.content}
				{@html page.content}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
</style>
