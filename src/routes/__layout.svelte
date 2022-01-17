<script context="module">
	import { sendQuery } from '@/utils/api';
	export const prerender = true;

	const gql = String.raw;
	const query = gql`
		query getMenus {
			menus {
				nodes {
					locations
					menuItems(where: { parentId: "null" }) {
						nodes {
							...MenuItemFields
							...MenuRecursive
						}
					}
				}
			}
			generalSettings {
				title
				description
			}
		}

		fragment MenuItemFields on MenuItem {
			path
			label
		}

		fragment MenuRecursive on MenuItem {
			childItems {
				nodes {
					...MenuItemFields
				}
			}
		}
	`;

	export async function load() {
		const {
			menus,
			generalSettings: { title, description }
		} = await sendQuery(query);

		return {
			props: {
				menus: menus.nodes,
				title,
				description
			}
		};
	}
</script>

<script>
	import CardTooltip from '@/components/CardTooltip.svelte';
	import Header from '@/components/layout/Header.svelte';
	import Footer from '@/components/layout/Footer.svelte';
	import { setContext } from 'svelte';

	export let menus;
	export let title;
	export let description;

	const getMenu = (locationId) =>
		menus.find((e) => e.locations.includes(locationId)).menuItems.nodes;

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

<Header {title} menu={getMenu('MENU_1')} />

<main>
	<slot />
</main>

<Footer {...footer} />

<CardTooltip />

<style lang="scss" global>
	@import '../styles/main';

	.content-wrap {
		display: flex;
		position: relative;
		align-items: flex-start;
	}

	.content-main {
		flex: 1 1 auto;
	}

	.content-aside {
		flex: 0 0 20%;
	}
</style>
