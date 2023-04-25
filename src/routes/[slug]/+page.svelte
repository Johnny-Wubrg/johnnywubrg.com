<script>
	import { siteTitle } from '$lib/stores/site';
	export let data;
	const page = data.page;
</script>

<svelte:head>
	{#if page.seo?.title}
		<title>{page.seo.title}</title>
	{:else}
		<title>{$siteTitle} | {page.title}</title>
	{/if}

	{#if page.seo?.description}
		<meta name="description" content={page.seo.description} />
	{/if}

	<meta name="author" content={page.author.node.name} />
</svelte:head>

<div class="content-wrap container">
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
