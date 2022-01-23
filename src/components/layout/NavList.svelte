<script lang="ts">
	export let menu;
	export let depth = 0;

	const populateDepthClasses = (type: string) => {
		const base = `nav-${type}`;
		const decorator = depth === 0 ? 'root' : 'child';

		return [base, `${base}-${depth}`, `${base}-${decorator}`].join(' ');
	};
</script>

<ul class={populateDepthClasses('list')}>
	{#each menu as item}
		<li class={populateDepthClasses('item')}>
			<a class={populateDepthClasses('link')} href={item.path}>
				<span class="nav-label">
					{item.label}
				</span>
				{#if item.childItems?.nodes?.length}
					&gt;
				{/if}
			</a>
			{#if item.childItems?.nodes?.length}
				<svelte:self menu={item.childItems.nodes} depth={depth + 1} />
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	.nav {
		&-list {
			display: flex;
			list-style-type: none;
			margin: 0;
			padding: 0;
      background: var(--color-highlight);
			&-child {
				display: none;
				position: absolute;
				top: 100%;
        right: 0;
			}
		}
		&-item {
			position: relative;
			transition: font-size 200ms;
			&:hover,
			&:focus,
			&:focus-within {
				> .nav-list-child {
					display: block;
				}
			}
      &-child {
				font-size: 1em;
        white-space: nowrap;
      }
		}
		&-link {
			padding: 1em;
			display: block;
			text-decoration: none;
		}
	}
</style>
