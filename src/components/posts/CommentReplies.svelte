<script lang="ts">
	import type { Comment } from '$lib/models';
	import SingleComment from './SingleComment.svelte';

	export let replies: Comment[];

	type Mode = 'none' | 'list' | 'new';

	let mode: Mode = 'none';

	const toggleList = () => (mode = mode === 'list' ? 'none' : 'list');
</script>

<div class="replies" class:open={mode !== 'none'}>
	<p class="panels">
		{#if replies?.length}
			<button on:click={toggleList}>
				{mode === 'list' ? 'Hide' : 'Show'} Replies ({replies.length})
			</button>
		{/if}
	</p>
	{#if mode === 'list'}
		<div class="list">
			{#each replies as reply}
				<SingleComment comment={reply} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.list {
		margin-left: 0.5em;
		padding: 0.5em 0 0.5em 0.5em;
		border-left: 1px solid #000;
	}

	.panels {
		margin: 0.5em 0 0;
	}

	.panels button {
		padding: 0;
		line-height: 1;
		font-size: 0.875em;
		cursor: pointer;
		color: var(--color-link);
		background: none;
		border: none;
	}

	.replies.open {
		.panels {
			margin-bottom: 0.5em;
		}
	}

	/* 
	

	details {
		margin-top: 0.5em;
    &[open] > summary {
      margin-bottom: 0.5em;
    }
	} */
</style>
