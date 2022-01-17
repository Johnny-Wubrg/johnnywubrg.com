<script>
	import PostExcerpt from './PostExcerpt.svelte';
	export let posts;
</script>

{#if posts}
	<ul>
		{#each posts as post}
			<li>
				<PostExcerpt {post} />
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts found.</p>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	ul li + li {
		margin-top: 2rem;
	}
</style>
