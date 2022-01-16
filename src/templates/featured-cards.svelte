<script lang="ts">
	import Post from './post.svelte';
	export let post;
	const featuredCardId = post.featuredCardSettings.featuredCard;

	const imageUrl = (id: string) => `https://api.scryfall.com/cards/${id}?format=image&version=png`;
</script>

<Post {post}>
	<div class="post">
		<img class="featured-card" src={imageUrl(featuredCardId)} alt={post.title} width="300" />
		{@html post.content}
	</div>
</Post>

<style>
	.post::after {
		content: '';
    display: block;
		clear: both;
	}
  
	.featured-card {
		display: block;
		max-width: 300px;
		float: left;
		margin-right: 1em;
	}
</style>
