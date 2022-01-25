<script>
	import { formatDate } from '@/utils/datetime';
	export let post;
</script>

<article class="post">
	{#if post.featuredImage}
		<a href={post.uri} class="post-thumbnail">
			<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
		</a>
	{/if}
	<div class="post-content">
		<div class="post-headline">
			<h2>
				<a href={post.uri}>
					{post.title}
				</a>
			</h2>
			<span>{formatDate(post.date)}</span>
		</div>
		<div>{@html post.excerpt}</div>
		{#if post.featuredImage?.node?.mediaSettings?.artistCredit}
			<p>🖌️ Artist Credit: {post.featuredImage.node.mediaSettings.artistCredit}</p>
		{/if}
	</div>
</article>

<style lang="scss">
	.post {
		display: flex;
		&-thumbnail {
			display: block;
			flex: 0 0 30%;
			margin-right: 1em;
			img {
				display: block;
				width: 100%;
			}
		}
		&-content {
			flex: 1 1 auto;
		}
		&-headline {
			h2 {
				margin: 0;
				display: inline-block;
				margin-right: 0.5rem;
			}
		}
	}
</style>
