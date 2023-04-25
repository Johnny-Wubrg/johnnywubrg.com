
import { getHomepageQuery } from '$lib/api/queries/homepage';
import { sendQuery } from '$lib/api/utils';
export const prerender = true;

export async function load() {
	const { posts, featuredCard, generalSettings } = await sendQuery(getHomepageQuery);

	return {
		posts: posts.nodes,
		featuredCard,
		generalSettings
	};
}
