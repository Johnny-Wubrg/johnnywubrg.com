<script lang="ts">
	import Template from './default.svelte';
	export let post;
	const featuredCardId = post.featuredCardSettings.featuredCard;

	const imageUrl = (id: string) =>
		`http://admin.johnny-wubrg.local/wp-json/wp-mtg/v1/cards/${id}/image.png`;
</script>

<Template {post}>
	<img class="featured-card" src={imageUrl(featuredCardId)} alt={post.title} width="300" />
	{#if post.content}
		{@html post.content}
	{/if}
</Template>

<style>
</style>
