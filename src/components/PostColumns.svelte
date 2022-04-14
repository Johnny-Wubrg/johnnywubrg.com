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

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1em;
		li {
			flex: 0 1 50%;
			:global(.post) {
				display: block;
			}
			:global(.post-thumbnail) {
				margin: 0;
				margin-bottom: 1em;
			}
		}
	}
</style>
