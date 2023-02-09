<script>
	import PageLoader from './PageLoader.svelte';
	import NavList from './NavList.svelte';
	export let menu;
	export let title;

	let scrollY;
	$: scrolled = scrollY > 48;
</script>

<svelte:window bind:scrollY />

<header class="header" class:scrolled>
	<PageLoader />
	<div class="header-wrap">
		<h1 class="header-brand">
			<a href="/">
				<img src="/jw-logo.svg" alt={title} />
			</a>
		</h1>
		{#if menu}
			<nav class="nav">
				<NavList {menu} />
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
	.header {
		position: sticky;
		top: 0;
		background: var(--color-background);
		z-index: 90;
		&-wrap {
			max-width: var(--container-width);
			margin: auto;
			padding: 0 1rem;
			text-align: center;
			@include breakpoint(small) {
				display: flex;
				justify-content: space-between;
				align-items: center;
				text-align: left;
			}

			.nav {
				display: none;
				@include breakpoint(small) {
					display: block;
					position: relative;
				}
			}
		}
		&-brand {
			margin: 0;
			transition: font-size 200ms;
			padding: 0.5em 0;
			a {
				display: block;
			}
			img {
				width: 4em;
				display: block;
				margin: auto;
			}
		}
		&.scrolled {
			.header-brand {
				font-size: 1.2em;
			}

			:global(.nav-item-root) {
				font-size: 0.85em;
			}
		}
	}
</style>
