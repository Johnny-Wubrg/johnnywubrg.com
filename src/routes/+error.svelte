<script>
	
  import { page } from '$app/stores';
	import NotFound from '@/components/errors/NotFound.svelte';
	import Unknown from '@/components/errors/Unknown.svelte';

	const templateMap = {
		'404': NotFound
	};

	$: template = templateMap[$page.status] ?? Unknown;
</script>

<div class="error">
	<svelte:component this={template} />
</div>

<style>
	.error {
		text-align: center;
	}
</style>
