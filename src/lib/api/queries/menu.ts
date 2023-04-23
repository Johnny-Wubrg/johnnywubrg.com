import type { MenusQueryResponse } from '$lib/models';
import { gql } from './gql';

export const getMenusQuery = gql<MenusQueryResponse>`
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
