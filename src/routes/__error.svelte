<script context="module">
	export function load({ status }) {
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	export let status;
</script>

{#if status == 404}
	<h1>
		You're <a
			href="https://scryfall.com/card/war/74/totally-lost"
			data-scryfall-id="adffef78-f776-42d3-ab40-3347c8e5c88b"
			target="_blank">totally lost</a
		>!
	</h1>
	<p>The page you're looking looking for cannot be found.</p>
{:else}
	<h1>Error</h1>
	<p>An unknown error occurred.</p>
{/if}
