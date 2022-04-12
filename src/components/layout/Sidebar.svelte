<script>
	import FeaturedCard from '@/components/FeaturedCard.svelte';
	export let card;
</script>

<div class="sidebar">
	{#if card !== null}
		<FeaturedCard {card} />
	{/if}
</div>
