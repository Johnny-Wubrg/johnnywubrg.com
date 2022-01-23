<script>
	import PageLoader from './PageLoader.svelte';
	import NavList from './NavList.svelte';
	export let menu;
	export let title;

	let scrolled;
</script>

<svelte:window bind:scrollY={scrolled}/>

<header class="header" class:scrolled>
	<PageLoader />
	<div class="header-wrap">
		<h1 class="header-brand">
			<a href="/">{title}</a>
		</h1>
		<nav class="nav">
			<NavList {menu} />
		</nav>
	</div>
</header>

<style lang="scss">
	.header {
		position: sticky;
		top: 0;
		background: var(--color-highlight);
		z-index: 90;
		&-wrap {
			max-width: var(--container-width);
			margin: auto;
			padding: 0 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&-brand {
			margin: 0;
			transition: font-size 200ms;
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
