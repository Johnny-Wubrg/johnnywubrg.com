import type { PageQueryResponse, QueryBySlugRequest } from '$lib/models';
import { gql } from './gql';

export const getPageQuery = gql<QueryBySlugRequest, PageQueryResponse>`
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
