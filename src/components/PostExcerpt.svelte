<script lang="ts">
	import type { Post } from '$lib/models';
	import { formatDate } from '$lib/utils/datetime';
	export let post: Post;
</script>

<article class="post">
	{#if post.featuredImage}
		<a href={post.uri} class="post-thumbnail">
			<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
			{#if post.categories && post.categories.nodes.length}
				<h2 class="post-category">{post.categories.nodes[0].name}</h2>
			{/if}
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
		@include breakpoint(small) {
			display: flex;
		}
		&-thumbnail {
			position: relative;
			display: block;
			flex: 0 0 30%;
			@include breakpoint(small) {
				margin-right: 1em;
			}
			img {
				display: block;
				width: 100%;
				object-fit: cover;
				aspect-ratio: 6 / 4;
			}
		}
		&-category {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			margin: 0;
			background: rgba(#000, 0.5);
			padding: 0.5em;
			color: var(--color-white);
			left: 0;
			width: 100%;
			text-align: center;
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
