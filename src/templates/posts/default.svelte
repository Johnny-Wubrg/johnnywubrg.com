<script>
	import ParallaxHero from '@/components/ParallaxHero.svelte';
	import { formatDate } from '$lib/utils/datetime';
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

<article class="post-wrap">
	{#if post.featuredImage}
		<ParallaxHero src={post.featuredImage.node.sourceUrl}>
			<slot name="title">
				<h1>{post.title}</h1>
			</slot>
			<p class="post-meta">
				{post.author.node.name} on {formatDate(post.date)}
				{#if post.featuredImage?.node?.mediaSettings?.artistCredit}
					| 🖌️ Artist Credit: {post.featuredImage.node.mediaSettings.artistCredit}
				{/if}
			</p>
		</ParallaxHero>
	{:else}
		<div class="post-title container">
			<slot name="title">
				<h1>{post.title}</h1>
			</slot>
			<p class="post-meta">
				{post.author.node.name} on {formatDate(post.date)}
				{#if post.featuredImage?.node?.mediaSettings?.artistCredit}
					| 🖌️ Artist Credit: {post.featuredImage.node.mediaSettings.artistCredit}
				{/if}
			</p>
		</div>
	{/if}
	<div class="post-body container">
		<div class="post-content">
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
	</div>
</article>

<style lang="scss">
	.category-list {
		border-top: 2px solid var(--color-border);
		margin-top: 2.5rem;
		padding-top: 2rem;
		h4 {
			margin: 0;
		}
	}

	.post-content::after {
		content: '';
		display: block;
		clear: both;
	}

	.post-content :global(.featured-card) {
		display: block;
		width: 100%;
		margin-bottom: 1em;
		
		@include breakpoint(small) {
			max-width: 300px;
			float: left;
			margin-right: 1em;
			margin-bottom: 0;
		}
	}
</style>
