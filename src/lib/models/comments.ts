import type { Author } from './author';
import type { GraphMutationResponse, GraphNode } from './graph';

export interface Comment {
	databaseId: number;
	parentDatabaseId: number;
	content: string;
	dateGmt: string;
	karma?: number;
	author: GraphNode<Author>;
	replies?: Comment[];
}

export type CommentMutationResponse = GraphMutationResponse<'comment', Comment>;

export interface CommentQueryRequest {
	postId: number;
}

export interface AddCommentMutationRequest {
	postId: number;
	content: string;
	author: string;
	parent?: number;
}
