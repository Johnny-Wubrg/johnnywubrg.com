import { gql } from './gql';

export const getPageQuery = gql`
		query getPageBySlug($slug: ID!) {
			page(id: $slug, idType: URI) {
				content
				title
				author {
					node {
						name
					}
				}
				seo {
					title
					description
				}
			}
		}
	`;