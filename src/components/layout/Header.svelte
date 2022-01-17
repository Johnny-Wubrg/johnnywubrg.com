<script>
	export let menu;
	export let title;
</script>

<header class="header">
	<div class="header-wrap">
		<h1 class="header-brand">
			<a href="/">{title}</a>
		</h1>
		<nav class="nav">
			<ul class="nav-list">
				{#each menu as item}
					<li class="nav-item">
						<a class="nav-link" href={item.path}>{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<!-- {JSON.stringify(menu)} -->
</header>

<style lang="scss">
	.header {
		&-wrap {
			max-width: var(--container-width);
			margin: auto;
			padding: 1rem;
		}
	}
</style>
