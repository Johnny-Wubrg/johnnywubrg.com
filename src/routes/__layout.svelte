<script context="module">
	import '@/layout.css';
</script>

<script>
	import CardTooltip from '@/components/CardTooltip.svelte';
</script>

{#each Array(36) as _}
	<br />
{/each}

<main>
	<slot />
	<CardTooltip />
</main>

{#each Array(36) as _}
	<br />
{/each}

<style>
	main {
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto 12rem;
	}
</style>
