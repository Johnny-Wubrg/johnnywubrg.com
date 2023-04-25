<script>
	import { siteTitle } from '$lib/stores/site';
	import PostList from '@/components/PostList.svelte';
	export let category;
</script>

<svelte:head>
	<title>
		{$siteTitle} | {category.name}
	</title>
	{#if category.description}
		<meta name="description" content={category.description} />
	{/if}
</svelte:head>

<div class="content-wrap container">
	<div class="content-main">
		<div class="category-info">
			<h1>{category.name}</h1>
			<slot name="description">
				{#if category.description}
					<p>{category.description}</p>
				{/if}
			</slot>
		</div>
		<slot>
			<PostList posts={category.posts.nodes} />
		</slot>
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
