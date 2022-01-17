<script>
	import { formatDate } from '@/utils/datetime';
	export let post;
</script>

<article>
	{#if post.featuredImage}
		<a href={post.uri}>
			<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
		</a>
	{/if}
	<div class="post-headline">
		<h2>
			<a href={post.uri}>
				{post.title}
			</a>
		</h2>
		<span>{formatDate(post.date)}</span>
	</div>
	<div>{@html post.excerpt}</div>
</article>

<style lang="scss">
	.post-headline {
		h2 {
			margin: 0;
			display: inline-block;
			margin-right: 0.5rem;
		}
	}
</style>
