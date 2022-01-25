<script lang="ts">
	export let src: string;

	let scroll: number;

	$: offset = Math.round((scroll ?? 0) * 0.6);
</script>

<svelte:window bind:scrollY={scroll} />

<div class="hero" style="--background: url({src}); --offset: {offset}px">
	<div class="hero-content">
		<div class="hero-text">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		position: relative;
		background-image: var(--background);
		background-size: cover;
		background-position: center calc(50% + var(--offset));
		height: 30vw;

		&-content {
			box-sizing: border-box;
			position: absolute;
			padding: 3em 0;
			text-align: center;
			width: 100%;
			top: 50%;
			transform: translateY(-50%);
			overflow: hidden;
			&:before {
				--crop-offset: -3em;
				content: '';
				position: absolute;
				top: var(--crop-offset);
				bottom: var(--crop-offset);
				left: var(--crop-offset);
				right: var(--crop-offset);
				background-image: var(--background);
				background-size: calc(100% + var(--crop-offset) * 2) auto;
				background-position: center calc(50% + (var(--offset)));
				filter: blur(1em) brightness(0.5);
				opacity: 0.9625;
			}
		}

		&-text {
			color: var(--color-white);
			position: relative;
			z-index: 2;
		}
	}
</style>
