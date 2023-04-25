import type { ViewerQueryResponse } from '$lib/models';
import { gql } from './gql';

export const getCurrentUserQuery = gql<ViewerQueryResponse>`
	query getViewer {
		viewer {
			name
			id
			roles {
				nodes {
					name
          displayName
				}
			}
		}
	}
`;
