import type { User } from './users';
import type { GraphMutationResponse, GraphNode } from './graph';

export type CommentStatus = 'open' | 'closed';

export interface Comment {
	databaseId: number;
	parentDatabaseId?: number;
	content: string;
	dateGmt: string;
	karma?: number;
	author: GraphNode<User>;
	replies?: Comment[];
}

export type CommentMutationResponse = {
	createComment: GraphMutationResponse<'comment', Comment>;
};

export interface CommentQueryRequest {
	postId: number;
}

export interface AddCommentMutationRequest {
	postId: number;
	content: string;
	author: string;
	parent?: number;
}
