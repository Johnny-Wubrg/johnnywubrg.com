<script lang="ts">
	import type { Comment } from '$lib/models';
	import { formatDateTime } from '$lib/utils/datetime';
	import CommentReplies from './CommentReplies.svelte';

	export let postId: number;
	export let comment: Comment;
</script>

<div class="comment">
	<p class="author">
		{comment.author.node.name} | <time>{formatDateTime(comment.dateGmt)}</time>
	</p>
	<div class="content">
		{@html comment.content}
	</div>

	<CommentReplies {comment} {postId} />
</div>

<style lang="scss">
	.comment {
		margin: 1em 0;
		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}

	.author {
		font-weight: bold;
		margin: 0 0 0.25em;
	}

	.content {
		margin: 0;
		:global(p) {
			margin: 0;
		}
	}
</style>
