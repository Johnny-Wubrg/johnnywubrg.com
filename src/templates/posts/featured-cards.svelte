<script lang="ts">
	import Template from './default.svelte';
	import { restMtgUri } from '@/config/api';
	export let post;
	const featuredCardId = post.featuredCardSettings.featuredCard;

	const imageUrl = (id: string) => `${restMtgUri}/cards/${id}/image.png`;
</script>

<Template {post}>
	<img class="featured-card" src={imageUrl(featuredCardId)} alt={post.title} width="300" />
	{#if post.content}
		{@html post.content}
	{/if}
</Template>
