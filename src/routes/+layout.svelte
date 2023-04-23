<script lang="ts">
	import CardTooltip from '@/components/CardTooltip.svelte';
	import Header from '@/components/layout/Header.svelte';
	import Footer from '@/components/layout/Footer.svelte';
	import MobileNav from '@/components/layout/MobileNav.svelte';
	import { dev } from '$app/environment';
	import { siteDescription, siteTitle } from '$lib/stores/site.js';

	export let data;

	const { menus, title, description } = data;

	const getMenu = (locationId: string) =>
		menus.find((e) => e.locations.includes(locationId))?.menuItems?.nodes;

	$siteTitle = title;
	$siteDescription = description;

	const footer = {
		title,
		description,
		menu: getMenu('FOOTER'),
		social: getMenu('SOCIAL')
	};
</script>

<svelte:head>
	<title>
		{title}
	</title>

	<meta name="description" content={description} />
	{#if !dev}
		<script defer data-domain="johnnywubrg.com" src="https://plausible.io/js/script.js"></script>
	{/if}
</svelte:head>

<Header menu={getMenu('PRIMARY')} />
<MobileNav menu={getMenu('PRIMARY')} />

<main>
	<slot />
</main>

<Footer {...footer} />

<CardTooltip />

<style lang="scss" global>
	@import '../styles/main';
</style>
