<script lang="ts">
	import SingleComment from './SingleComment.svelte';

	import { getCommentsQuery } from '$lib/api/queries/comments';
	import { sendQuery } from '$lib/api/utils';
	import Loader from '../Loader.svelte';
	import CommentsForm from './CommentsForm.svelte';
	import type { Comment, CommentStatus } from '$lib/models';

	export let postId: number;

	let comments: Comment[] = null;
	let status: CommentStatus;

	const getComments = async (postId: number) => {
		const { post } = await sendQuery(getCommentsQuery, { postId });
		const results = [...post.comments.nodes].sort((a, b) => (b > a ? -1 : 1));

		const children = results.filter((e) => e.parentDatabaseId > 0);

		for (const child of children) {
			const parent = results.find((e) => e.databaseId === child.parentDatabaseId);
			if (parent) {
				parent.replies = parent.replies || [];
				parent.replies.push(child);
			}
		}

		status = post.commentStatus;
		comments = results.filter((e) => e.parentDatabaseId <= 0);
	};
</script>

<div class="container">
	<h2>Comments</h2>

	{#await getComments(postId)}
		<Loader />
	{:then}
		{#if comments.length}
			{#each comments as comment}
				<SingleComment {comment} {postId} {status} />
			{/each}
		{:else}
			<p>No comments yet.</p>
		{/if}

		{#if status === 'open'}
			<CommentsForm {postId} on:commentCreated={(c) => (comments = [...comments, c.detail])}>
				<h3>Post a Comment</h3>
			</CommentsForm>
		{:else}
			<p>Comments are closed for this post.</p>
		{/if}
	{/await}
</div>

<style lang="scss">
</style>
