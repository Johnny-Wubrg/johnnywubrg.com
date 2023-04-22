<script>
	import Comments from 'disqus-svelte'; // You can use any alias.
	export let data;
	const { slug, post, template } = data;

	const isClient = typeof window !== 'undefined';
</script>

<svelte:component this={template} {post} />

{#if isClient}
	<div class="container">
		<Comments identifier={slug} siteName="johnny-wubrg" />
	</div>
{/if}
