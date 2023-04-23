import { gql } from './gql';

export const getMenusQuery = gql`
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
