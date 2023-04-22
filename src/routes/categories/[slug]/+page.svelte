<script>
	export let data;
	const { category, template } = data;
</script>

<svelte:component this={template} {category} />
