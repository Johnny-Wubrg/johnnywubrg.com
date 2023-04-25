
import { getMenusQuery } from '$lib/api/queries/menu';
import { sendQuery } from '$lib/api/utils';
export const prerender = true;

export async function load() {
	const {
		menus,
		generalSettings: { title, description }
	} = await sendQuery(getMenusQuery);

	return {
		menus: menus.nodes,
		title,
		description
	};
}
