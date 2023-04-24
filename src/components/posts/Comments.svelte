<script lang="ts">
	import SingleComment from './SingleComment.svelte';

	import { getCommentsQuery } from '$lib/api/queries/comments';
	import { sendQuery } from '$lib/api/utils';
	import Loader from '../Loader.svelte';

	export let postId: number;

	const getComments = async (postId: number) => {
		const { post } = await sendQuery(getCommentsQuery, { postId });
		const comments = [...post.comments.nodes];

		const children = comments.filter((e) => e.parentDatabaseId > 0);

		for (const child of children) {
			const parent = comments.find((e) => e.databaseId === child.parentDatabaseId);
			if (parent) {
				parent.replies = parent.replies || [];
				parent.replies.push(child);
			}
		}

		return comments.filter((e) => e.parentDatabaseId <= 0);
	};
</script>

<div class="container">
	<h2>Comments</h2>

	{#await getComments(postId)}
		<Loader />
	{:then comments}
		{#if comments.length}
			{#each comments as comment}
				<SingleComment {comment} />
			{/each}
		{:else}
			<p>No comments yet.</p>
		{/if}
	{/await}
</div>

<style lang="scss">
</style>
