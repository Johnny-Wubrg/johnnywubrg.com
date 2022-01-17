<script lang="ts">
	interface CardView {
		id: string;
		name: string;
	}

	interface TooltipPosition {
		x: number;
		y: number;
	}

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const elementSelector = '[data-scryfall-id]';
	let card: CardView;
	let tooltipPos: TooltipPosition = { x: 0, y: 0 };
	const width = 220;
	const height = (width * 5) / 7;

	const imageUrl = (id: string) => `https://api.scryfall.com/cards/${id}?format=image&version=png`;

	function handleMouseMove(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const offset = window.scrollY + window.innerHeight;

		tooltipPos = {
			x: e.pageX + 15,
			y: e.pageY + 15 + height < offset ? e.pageY + 15 : e.pageY - height - 15
		};

		if (!target.matches(elementSelector)) {
			card = null;
			return;
		}

		card = {
			id: target.dataset.scryfallId,
			name: target.innerText
		};
	}

	onMount(() => {
		const tooltipElements = document.body.querySelectorAll<HTMLElement>(elementSelector);
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
		style="--tooltip-x: {tooltipPos.x}px;--tooltip-y: {tooltipPos.y}px;--tooltip-width: {width}px"
	>
		<img src={imageUrl(card.id)} alt={card.name} />
	</div>
{/if}

<style lang="scss">
	.card-preview {
		position: absolute;
		left: var(--tooltip-x);
		top: var(--tooltip-y);
		width: var(--tooltip-width);
		img {
			display: block;
			width: 100%;
		}
	}
</style>
