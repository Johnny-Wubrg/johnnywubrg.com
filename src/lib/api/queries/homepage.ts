import type { HomepageQueryResponse } from '$lib/models';
import { gql } from './gql';

export const getHomepageQuery = gql<HomepageQueryResponse>`
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