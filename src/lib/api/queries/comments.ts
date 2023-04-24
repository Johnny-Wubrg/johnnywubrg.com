import type {
	AddCommentMutationRequest,
	Comment,
	CommentMutationResponse,
	CommentQueryRequest,
	PostQueryResponse
} from '$lib/models';
import { gql } from './gql';

export const commentFragment = gql<Comment>`
	fragment CommentFields on Comment {
		content(format: RENDERED)
		databaseId
		parentDatabaseId
		dateGmt
		karma
		author {
			node {
				name
			}
		}
	}
`;

export const getCommentsQuery = gql<CommentQueryRequest, PostQueryResponse>`
	query getComments($postId: ID!) {
		post(idType: DATABASE_ID, id: $postId) {
			databaseId
			comments {
				nodes {
					...CommentFields
				}
			}
		}
	}

	${commentFragment}
`;

export const addCommentMutation = gql<AddCommentMutationRequest, CommentMutationResponse>`
	mutation addComment($postId: Int!, $content: String!, $author: String!, $parent: ID) {
		createComment(
			input: { content: $content, commentOn: $postId, author: $author, parent: $parent }
		) {
			clientMutationId
			success
			comment {
				...CommentFields
			}
		}
	}

	${commentFragment}
`;
