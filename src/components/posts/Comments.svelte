<script lang="ts">
	import { getCommentsQuery } from '$lib/api/queries/comments';
	import { sendQuery } from '$lib/api/utils';
	import Loader from '../Loader.svelte';

	export let postId: number;

	const getComments = async (id: number) => {
		const { post } = await sendQuery(getCommentsQuery, { id });
		return post.comments.nodes;
	};
</script>

<div class="container">
	<h2>Comments</h2>

	{#await getComments(postId)}
		<Loader />
	{:then comments}
		{JSON.stringify(comments)}
	{/await}
</div>
