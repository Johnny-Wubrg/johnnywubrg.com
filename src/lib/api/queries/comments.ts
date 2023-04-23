import type { Comment, CommentMutationResponse, PostQueryResponse } from '$lib/models';
import { gql } from './gql';

export const commentFragment = gql<Comment>`
	fragment CommentFields on Comment {
		content(format: RENDERED)
		dateGmt
		karma
		author {
			node {
				name
			}
		}
	}
`;

export const getCommentsQuery = gql<PostQueryResponse>`
	query getComments($id: ID!) {
		post(idType: DATABASE_ID, id: $id) {
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

export const addCommentMutation = gql<CommentMutationResponse>`
	mutation addComment($id: Int, $content: String, $author: String) {
		createComment(input: { content: $content, commentOn: $id, author: $author }) {
			clientMutationId
			success
			comment {
				...CommentFields
			}
		}
	}

	${commentFragment}
`;
