
import { sendQuery } from '$lib/api/utils';
export const prerender = true;

const gql = String.raw;
const query = gql`
		query getPosts {
			posts {
				nodes {
					databaseId
					uri
					title
					excerpt
					date
					featuredImage {
						node {
							sourceUrl
							altText
							mediaDetails {
								width
								height
							}
							mediaSettings {
								artistCredit
							}
						}
					}
					categories {
						nodes {
							name
						}
					}
				}
			}
		}
	`;

export async function load() {
	const { posts } = await sendQuery(query);

	return {
		posts: posts.nodes
	};
}
