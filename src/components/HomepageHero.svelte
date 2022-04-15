<script>
	export let description;
	export let card;

	const img =
		'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/2/225a0644-184e-4216-ac53-09a8a33538a2.jpg?1645341008';
	import ParallaxHero from './ParallaxHero.svelte';
	import FeaturedCard from './FeaturedCard.svelte';
</script>

<div class="homepage-hero">
	<ParallaxHero src={img}>
		<div slot="content" class="content">
			<div class="container">
				<div class="intro">
					<h2>{description}</h2>
				</div>
				{#if card}
					<hr />
					<FeaturedCard {card} />
				{/if}
			</div>
		</div>
	</ParallaxHero>
</div>

<style lang="scss">
	.homepage-hero {
		:global(.hero) {
			height: auto;
		}
		hr {
			border-color: var(--color-white);
			margin-bottom: 1em;
			@include breakpoint(small) {
				display: none;
			}
		}
	}
	.content {
		background: rgba(#000, 0.5);
		height: 100%;
	}
	.container {
		text-align: center;
		margin-bottom: 0;
		:global(.featured-card) {
			max-width: 300px;
			color: var(--color-white);
			margin: auto;
		}
		@include breakpoint(small) {
			text-align: left;
			display: flex;
			align-items: center;
			justify-content: space-between;
			:global(.featured-card) {
				margin: 0;
			}
		}
	}
	.intro {
		color: var(--color-white);
		text-shadow: 0 0 2em #000;
		h2 {
			font-size: 2em;
		}
	}
</style>
