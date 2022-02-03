<script lang="ts">
	import Icon from 'svelte-awesome';
	import { arrowUp } from 'svelte-awesome/icons';
	import { fly } from 'svelte/transition';

	export let menu;
	let parents = [];
	let active = null;
	let ref;
	let scrollTop: number;

	const toggleMenu = () => {
		active = !active ? menu : null;
		parents = [];
	};

	const closeMenu = (e: Event) => {
		if (e && e.composedPath().includes(ref)) {
			return true;
		}

		active = null;
		parents = [];
	};

	const traverse = (menuItem) => {
		parents = [...parents, active];
		active = menuItem.childItems.nodes;
	};

	const pop = () => {
		active = parents.pop();
		parents = [...parents];
	};
</script>

<svelte:window bind:scrollY={scrollTop} on:scroll={closeMenu} on:click={closeMenu} />

<div class="mobile-nav" bind:this={ref}>
	{#if active}
		<div class="menu" transition:fly={{ y: 20, duration: 200 }}>
			<ul class="menu-list">
				{#if parents.length}
					<li class="menu-row">
						<button class="menu-action" on:click={pop}>&#11207; Back</button>
					</li>
				{/if}
				{#each active as item}
					<li class="menu-row">
						<a class="menu-action" href={item.path}>
							{item.label}
						</a>
						{#if item.childItems?.nodes?.length}
							<button class="menu-traverse" on:click={() => traverse(item)}>&#11208;</button>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		{#if scrollTop > 0}
			<button
				class="action scroll-top"
				transition:fly={{ x: 20, duration: 200 }}
				on:click={() => window.scrollTo({ top: 0 })}
			>
				<Icon data={arrowUp} />
			</button>
		{/if}
	{/if}
	<button class="action toggle" class:active on:click={toggleMenu}>
		<div class="toggle-bar" />
	</button>
</div>

<style lang="scss">
	.mobile-nav {
		position: fixed;
		bottom: 1.5em;
		right: 1.5em;
		z-index: 30;
		display: flex;
		color: var(--color-white);

		@include breakpoint(small) {
			display: none;
		}
	}

	.action {
		background: var(--color-black);
		font-size: 2em;
		border: none;
		border-radius: 50%;
		width: 1.5em;
		height: 1.5em;
		padding: 0;
		color: var(--color-white);
		margin-left: 0.25em;
		display: flex;
		justify-content: center;
		align-items: center;
		:global(.fa-icon) {
			width: 0.75em;
			height: 0.75em;
		}
	}

	.toggle {
		position: relative;
		&-bar {
			height: 0.125em;
			width: 0.75em;
			position: absolute;
			background: var(--color-white);
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			&::before,
			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				background: var(--color-white);
				left: 0;
				transition: 200ms;
			}
			&::before {
				bottom: 0.25em;
			}
			&::after {
				top: 0.25em;
			}
		}
		&.active {
			.toggle-bar {
				&::before {
					bottom: 0;
				}
				&::after {
					top: 0;
				}
			}
		}
	}

	.menu {
		position: absolute;
		bottom: calc(100% + 1em);
		right: 0;
		background: var(--color-black);
		font-size: 1.5em;
		border-radius: 0.25em;
		overflow: hidden;

		&-list {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		&-row {
			display: flex;
			justify-content: space-between;
			align-items: stretch;
		}

		&-action {
			display: block;
			text-align: left;
			width: 100%;
			padding: 0.5em;
			text-decoration: none;
			white-space: pre;
			background: none;
			border: none;
			color: inherit;
		}

		&-traverse {
			padding: 0.5em;
			background: none;
			border: none;
			color: inherit;
			background: rgba(#eee, 0.05);
		}
	}
</style>
