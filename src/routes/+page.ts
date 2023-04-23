
import { sendQuery } from '$lib/api/utils';
export const prerender = true;

const gql = String.raw;
const query = gql`
		query getHomepage {
			posts(first: 3) {
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
			featuredCard {
				label
				card_name
				image
				post_uri
				post_title
				archive_uri
			}
			generalSettings {
				title,
				description
			}
		}
	`;

export async function load() {
	const { posts, featuredCard, generalSettings } = await sendQuery(query);

	return {
		posts: posts.nodes,
		featuredCard,
		generalSettings
	};
}
