<script>
	import { formatDate } from '@/utils/datetime';
	export let post;

	const categories = post.categories?.nodes?.map((category) => category.name) ?? [];
</script>

<article>
	{#if post.featuredImage}
		<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
	{/if}
	<slot name="title">
		<h1>{post.title}</h1>
	</slot>
	<p class="post-meta">
		✍️ {post.author.node.name} on {formatDate(post.date)}
	</p>
	<slot>
		<div>{@html post.content}</div>
	</slot>
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
</style>
