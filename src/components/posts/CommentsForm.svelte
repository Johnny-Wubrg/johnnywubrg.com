<script lang="ts">
	import { addCommentMutation } from '$lib/api/queries/comments';
	import { getCurrentUserQuery } from '$lib/api/queries/users';
	import { sendQuery } from '$lib/api/utils';
	import type { AddCommentMutationRequest, Comment, User } from '$lib/models';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let postId: number;
	export let parent: number = null;
	let loading = false;

	const dispatch = createEventDispatcher();

	const data: AddCommentMutationRequest = {
		postId,
		parent,
		author: '',
		content: ''
	};

	let user: User;

	onMount(async () => {
		const { viewer } = await sendQuery(getCurrentUserQuery);
		user = viewer;
	});

	const submitComment = async () => {
		loading = true;
		const dataToSubmit = {
			...data
		};

		if (!dataToSubmit.author) dataToSubmit.author = 'Anonymous';

		const { createComment } = await sendQuery(addCommentMutation, dataToSubmit);

		if (createComment?.success) {
			dispatch('commentCreated', createComment.comment);
			data.content = '';
		}

    loading = false;
	};
</script>

<slot />

<form class="form" on:submit|preventDefault={submitComment}>
	<div class="field">
		<label>
			<p class="label">Name</p>
			<input type="text" bind:value={data.author} placeholder="Anonymous" />
		</label>
	</div>
	<div class="field">
		<label>
			<p class="label">Comment</p>
			<textarea bind:value={data.content} required />
		</label>
	</div>

	<div class="form-actions">
		<button class="button" disabled={loading}>
			{#if loading}Posting...{:else}Post{/if}
		</button>
	</div>
</form>

<style lang="scss">
	.form {
		max-width: 600px;
	}

	.field {
		margin: 1em 0;
		input[type='text'],
		textarea {
			font-size: 1em;
			font-weight: 100;
			font-family: inherit;
			display: block;
			width: 100%;
		}
    textarea {
      resize: vertical;
    }
	}

	.label {
		margin: 0 0 0.5em;
	}

	.form-actions {
		margin-top: 1em;
	}
</style>
