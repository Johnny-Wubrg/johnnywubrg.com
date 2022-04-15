<script lang="ts">
	export let description;
	export let card;

	const img =
		'https://mtg-blog-contentbucket-4ktnmn59klbs.s3.amazonaws.com/2022/04/150420221649998614.jpeg';
	import ParallaxHero from './ParallaxHero.svelte';
	import FeaturedCard from './FeaturedCard.svelte';

	let scroll: number = 0;
	$: bgOpacity = 0.5 + scroll / 1000;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="homepage-hero">
	<ParallaxHero src={img}>
		<div slot="content" class="content" style="--bg-opacity: {bgOpacity}">
			<div class="container">
				<div class="intro">
					<h2>{description}</h2>
					<p>Background Art: Isochron Scepter by Mark Harrison</p>
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
		height: 100%;
		background: rgba(#000, 0.5);
		@include breakpoint(small) {
			background: rgba(#000, var(--bg-opacity));
		}
	}
	.container {
		text-align: center;
		margin-top: 0;
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
			margin: 0;
			font-size: 2em;
		}
		p {
			font-size: 0.8rem;
			font-style: italic;
		}
	}
</style>
