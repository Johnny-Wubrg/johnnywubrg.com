<script context="module">
	export const prerender = true;
</script>

<script>
	import CardTooltip from '@/components/CardTooltip.svelte';
</script>

<main>
	<slot />
	<CardTooltip />
</main>

<style lang="scss" global>
	@import '../styles/main';
</style>
