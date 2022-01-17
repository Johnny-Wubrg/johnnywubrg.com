<script>
	import { getContext } from 'svelte';

	const title = getContext('siteTitle');
</script>

<svelte:head><title>{title} | You're totally lost!</title></svelte:head>

<h1>
	You're <a
		href="https://scryfall.com/card/war/74/totally-lost"
		data-scryfall-id="adffef78-f776-42d3-ab40-3347c8e5c88b"
		target="_blank">totally lost</a
	>!
</h1>
<p>The page you're looking looking for cannot be found.</p>
