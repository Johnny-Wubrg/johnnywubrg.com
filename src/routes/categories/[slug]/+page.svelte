<script>
	export let data;

	$: category = data.category;
	$: template = data.template;
</script>

<svelte:component this={template} {category} />
