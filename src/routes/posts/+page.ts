
import { getPostsQuery } from '$lib/api/queries/posts';
import { sendQuery } from '$lib/api/utils';
export const prerender = true;

export async function load() {
	const { posts } = await sendQuery(getPostsQuery);

	return {
		posts: posts.nodes
	};
}
