<script lang="ts">
	import { formatDate } from '$lib/utils/datetime';
	import { restMtgUri } from '$lib/config/api';

	import Template from './default.svelte';
	export let category;

	const imageUrl = (id: string) => `${restMtgUri}/cards/${id}/image.png`;

	const posts = category.posts.nodes;
</script>

<Template {category}>
	<ul class="cards-list">
		{#each posts as post}
			<li class="cards-item">
				<a href={post.uri}>
					<div class="card">
						<img
							class="card-image"
							src={imageUrl(post.featuredCardSettings.featuredCard)}
							alt={post.title}
						/>
						<div class="card-name">
							{post.title}
						</div>
					</div>
					<p class="card-date">{formatDate(post.date)}</p>
				</a>
			</li>
		{/each}
	</ul>
</Template>

<style lang="scss">
	.cards {
		&-list {
			padding: 0;
			list-style-type: none;
			display: grid;
			gap: 1em;
			grid-template-columns: repeat(5, 20%);
		}

		&-item {
			flex: 0 0 20%;
			text-align: center;
		}
	}

	.card {
		position: relative;
		border-radius: 4.75% / 3.5%;
		overflow: hidden;
		&:hover {
			.card-name {
				opacity: 1;
			}
		}
		img {
			display: block;
			max-width: 100%;
		}
		&-name {
			margin: 0;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgba(#000, 70%);
			color: var(--color-white);
			font-size: 2em;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			transition: opacity 300ms;
		}
		&-date {
			margin: 0.5em 0 0;
		}
	}
</style>
