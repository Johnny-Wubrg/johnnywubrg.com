import { gql } from './gql';

export const getPostsQuery = gql`
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

export const getPostQuery = gql`
		query getPostBySlug($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				postId
				date
				title
				content
				author {
					node {
						name
					}
				}
				categories {
					nodes {
						name
						slug
					}
				}
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
				seo {
					title
					description
				}
			}
		}
	`;