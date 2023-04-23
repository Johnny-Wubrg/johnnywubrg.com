
import { sendQuery } from '$lib/api/utils';
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
		menus: menus.nodes,
		title,
		description
	};
}
