<script lang="ts">
	import type { Comment, CommentStatus } from '$lib/models';
	import { formatDateTime } from '$lib/utils/datetime';
	import PlaneswalkerSymbol from '../svg/PlaneswalkerSymbol.svelte';
	import CommentReplies from './CommentReplies.svelte';

	export let postId: number;
	export let comment: Comment;
	export let status: CommentStatus;
</script>

<div class="comment">
	<p class="author">
		{comment.author.node.name}
		{#if comment.author.node.badge}
			<span class="user-badge" title={comment.author.node.badge.label}>
				<PlaneswalkerSymbol
					color={comment.author.node.badge.rarityCode}
				/>
			</span>{/if} | <time>{formatDateTime(comment.dateGmt)}</time>
	</p>
	<div class="content">
		{@html comment.content}
	</div>

	<CommentReplies {comment} {postId} {status} />
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
		vertical-align: middle;
		margin: 0 0 0.25em;
	}

	.user-badge {
		vertical-align: middle;
		height: auto;
		width: 1ch;
		display: inline-block;
	}

	.content {
		margin: 0;
		:global(p) {
			margin: 0;
		}
	}
</style>
