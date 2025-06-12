<script lang="ts">
	export let src: string;

	let scroll: number;

	$: offset = Math.round((scroll ?? 0) * 0.6);
</script>

<svelte:window bind:scrollY={scroll} />

<div class="hero" style="--background: url({src}); --offset: {offset}px">
	<slot name="content">
		<div class="hero-content">
			<div class="hero-text">
				<slot />
			</div>
		</div>
	</slot>
</div>

<style lang="scss">
  @use 'src/styles/mixins';
	.hero {
		position: relative;
		background-image: var(--background);
		background-size: cover;
		background-position: center calc(50% + var(--offset));
		padding: 1em 0;

		@include mixins.breakpoint(small) {
			height: 30vw;
			padding: 0;
		}

		&-content {
			text-align: center;
			background: rgba(#000, 0.7);
			padding: 0.5em 0;
			
			@include mixins.breakpoint(small) {
				box-sizing: border-box;
				position: absolute;
				padding: 3em 0;
				width: 100%;
				top: 50%;
				background: none;
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
		}

		&-text {
			color: var(--color-white);
			position: relative;
			z-index: 2;
		}
	}
</style>
