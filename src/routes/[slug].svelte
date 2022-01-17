<script context="module" lang="ts">
	import { sendQuery } from '@/utils/api';

	const gql = String.raw;
	const query = gql`
		query getPageBySlug($slug: ID!) {
			page(id: $slug, idType: URI) {
				content
				title
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
	export let page;
</script>

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
