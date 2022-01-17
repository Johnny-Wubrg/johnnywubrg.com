<script context="module">
	export function load({ status, error }) {
		console.log(error);
		return {
			props: {
				status
			}
		};
	}
</script>

<script>
	import NotFound from '@/components/errors/NotFound.svelte';
	import Unknown from '@/components/errors/Unknown.svelte';

	export let status;
	const templateMap = {
		'404': NotFound
	};

	$: template = templateMap[status] ?? Unknown;
</script>

<div class="error">
	<svelte:component this={template} />
</div>

<style>
	.error {
		text-align: center;
	}
</style>
