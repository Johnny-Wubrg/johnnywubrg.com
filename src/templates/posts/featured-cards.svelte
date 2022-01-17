<script lang="ts">
	import Post from './default.svelte';
	export let post;
	const featuredCardId = post.featuredCardSettings.featuredCard;

	const imageUrl = (id: string) => `https://api.scryfall.com/cards/${id}?format=image&version=png`;
</script>

<Post {post}>
	<img class="featured-card" src={imageUrl(featuredCardId)} alt={post.title} width="300" />
	{#if post.content}
		{@html post.content}
	{/if}
</Post>

<style>
</style>
