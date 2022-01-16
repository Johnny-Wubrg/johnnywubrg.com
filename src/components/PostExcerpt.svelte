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
	<a href={post.uri}>
		<div class="post-headline">
			<h2>
				{post.title}
			</h2>
			<span>{formatDate(post.date)}</span>
		</div>
	</a>
	<div>{@html post.excerpt}</div>
</article>

<style>
</style>
