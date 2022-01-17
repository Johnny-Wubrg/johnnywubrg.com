<script>
	import { formatDate } from '@/utils/datetime';
	import { getContext } from 'svelte';
	export let post;

	const title = getContext('siteTitle');

	const categories = post.categories?.nodes?.map((category) => category.name) ?? [];
</script>

<svelte:head>
	{#if post.seo?.title}
		<title>{post.seo.title}</title>
	{:else}
		<title>{title} | {post.title}</title>
	{/if}

	{#if post.seo?.description}
		<meta name="description" content={post.seo.description} />
	{/if}

	<meta name="author" content={post.author.node.name} />
</svelte:head>

<article class="post">
	{#if post.featuredImage}
		<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
	{/if}
	<slot name="title">
		<h1>{post.title}</h1>
	</slot>
	<p class="post-meta">
		{post.author.node.name} on {formatDate(post.date)}
	</p>
	<div class="post">
		<slot>
			{#if post.content}
				{@html post.content}
			{/if}
		</slot>
	</div>
	{#if categories.length}
		<div class="category-list">
			<h4>Categorized As</h4>
			<p>{categories.join(', ')}</p>
		</div>
	{/if}
</article>

<style>
	article {
		margin-top: 2rem;
	}
	article img {
		max-width: 100%;
	}
	.category-list {
		border-top: 2px solid var(--color-gray-9);
		margin-top: 2.5rem;
		padding-top: 2rem;
	}
	.category-list h4 {
		margin: 0;
	}

	.post::after {
		content: '';
		display: block;
		clear: both;
	}

	.post :global(.featured-card) {
		display: block;
		max-width: 300px;
		float: left;
		margin-right: 1em;
	}
</style>
