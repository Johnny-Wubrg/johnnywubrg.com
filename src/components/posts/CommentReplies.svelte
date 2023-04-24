<script lang="ts">
	import type { Comment } from '$lib/models';
	import CommentsForm from './CommentsForm.svelte';
	import SingleComment from './SingleComment.svelte';

	export let postId: number;
	export let comment: Comment;

	let replies = comment.replies;

	type Mode = 'none' | 'list' | 'new';

	let mode: Mode = 'none';

	const toggleList = () => (mode = mode === 'list' ? 'none' : 'list');
	const toggleReply = () => (mode = mode === 'new' ? 'none' : 'new');

	const addReply = (reply: Comment) => {
		if (!comment.replies) comment.replies = [];
		comment.replies.push(reply);
		replies = comment.replies;
		mode = 'list';
	};
</script>

<div class="replies" class:open={mode !== 'none'}>
	<p class="panels">
		{#if replies?.length}
			<button on:click={toggleList}>
				{mode === 'list' ? 'Hide' : 'Show'} Replies ({replies.length})
			</button> |
		{/if}
		<button on:click={toggleReply}>Reply</button>
	</p>
	{#if mode === 'list'}
		<div class="list">
			{#each replies as reply}
				<SingleComment comment={reply} {postId} />
			{/each}
		</div>
	{/if}
	{#if mode === 'new'}
		<CommentsForm
			parent={comment.databaseId}
			{postId}
			on:commentCreated={(c) => addReply(c.detail)}
		/>
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
		vertical-align: middle;
	}

	.panels button {
		display: inline-block;
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
