import type { CategoriesQueryResponse, Category } from '$lib/models';
import { gql } from './gql';

export const getCategoriesQuery = gql<CategoriesQueryResponse>`
	query getCategories {
		categories(where: { hideEmpty: true, orderby: TERM_ORDER }) {
			nodes {
				name
				uri
				description
			}
		}
	}
`;

export const getCategoryQuery = gql<Category>`
	query getCategoryBySlug($slug: ID!) {
		category(idType: SLUG, id: $slug) {
			name
			description
			slug
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
					featuredCardSettings {
						featuredCard
					}
				}
			}
		}
	}
`;
