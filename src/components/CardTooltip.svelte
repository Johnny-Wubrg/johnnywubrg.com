<script>
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	export let card;
	export let tooltipPos = { x: 0, y: 0 };

	const imageUrl = (id) => `https://api.scryfall.com/cards/${id}?format=image&version=png`;

	function handleMouseMove(e) {
		const offset = window.scrollY + window.innerHeight;
		tooltipPos = {
			x: e.layerX + 15,
			y: e.layerY + 15 + 420 < offset ? e.layerY + 15 : e.layerY - 420 - 15
		};

		if (!e.target.matches('[data-scryfall-id]')) {
			card = null;
			return;
		}

		card = {
			id: e.target.dataset.scryfallId,
			name: e.target.innerText
		};
	}

	onMount(() => {
		const tooltipElements = document.body.querySelectorAll('[data-scryfall-id]');
		for (const elmt of tooltipElements) {
			const img = new Image();
			img.src = imageUrl(elmt.dataset.scryfallId);
		}
	});
</script>

<svelte:body on:mousemove={handleMouseMove} />

{#if card}
	<div
		transition:fade
		class="card-preview"
		style="--tooltip-x: {tooltipPos.x}px;--tooltip-y: {tooltipPos.y}px;"
	>
		<img src={imageUrl(card.id)} alt={card.name} />
	</div>
{/if}

<style>
	.card-preview {
		position: absolute;
		left: var(--tooltip-x);
		top: var(--tooltip-y);
		width: 300px;
	}

	.card-preview img {
		display: block;
		width: 100%;
	}
</style>
