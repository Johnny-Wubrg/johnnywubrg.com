<script>
  import NavList from './NavList.svelte';
	export let menu;
	export let title;
</script>

<header class="header">
	<div class="header-wrap">
		<h1 class="header-brand">
			<a href="/">{title}</a>
		</h1>
		<nav class="nav">
			<NavList {menu} />
		</nav>
	</div>

	<!-- {JSON.stringify(menu)} -->
</header>

<style lang="scss">
	.header {
		position: sticky;
		top: 0;
		background: var(--color-white);
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
    }
	}
</style>
