<script>
	import { browser } from '$app/environment';
	import Comments from '@/components/posts/Comments.svelte';
	export let data;
	const { slug, post, template } = data;
</script>

<svelte:component this={template} {post} />

{#if browser}
	<Comments postId={post.postId} />
{/if}
