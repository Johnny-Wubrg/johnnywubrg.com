<script>
	import CardTooltip from '@/components/CardTooltip.svelte';
	import { setContext } from 'svelte';
	import Header from '@/components/layout/Header.svelte';
	import Footer from '@/components/layout/Footer.svelte';
	import MobileNav from '@/components/layout/MobileNav.svelte';

	export let data;

	const {menus, title, description} = data;
	
	const getMenu = (locationId) =>
		menus.find((e) => e.locations.includes(locationId))?.menuItems?.nodes;

	setContext('siteTitle', title);
	setContext('siteDescription', description);

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
</svelte:head>

<Header {title} menu={getMenu('PRIMARY')} />
<MobileNav menu={getMenu('PRIMARY')} />

<main>
	<slot />
</main>

<Footer {...footer} />

<CardTooltip />

<style lang="scss" global>
	@import '../styles/main';
</style>
