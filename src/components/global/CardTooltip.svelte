<script lang="ts">
	interface CardView {
		image: string;
		name: string;
	}

	interface TooltipPosition {
		x: number;
		y: number;
	}

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const elementSelector = '[data-hover-src]';
	let card: CardView | null;
	let tooltipPos: TooltipPosition = { x: 0, y: 0 };
	const width = 220;
	const height = (width * 5) / 7;

	function handleMouseMove(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const offsetY = window.scrollY + window.innerHeight;
		const offsetX = window.scrollX + window.innerWidth;

		tooltipPos = {
			x: e.pageX + 15 + width < offsetX ? e.pageX + 15 : e.pageX - width - 15,
			y: e.pageY + 15 + height < offsetY ? e.pageY + 15 : e.pageY - height - 15
		};

		if (!target.matches(elementSelector)) {
			card = null;
			return;
		}

		card = {
			image: target.dataset.hoverSrc ?? '',
			name: target.dataset.hoverAlt ?? target.innerText
		};
	}

	onMount(() => {
		const tooltipElements = document.body.querySelectorAll<HTMLElement>(elementSelector);
		for (const elmt of tooltipElements) {
			const img = new Image();
			img.src = elmt.dataset.hoverSrc ?? '';
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
		<img src={card.image} alt={card.name} />
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
