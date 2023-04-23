import type { Author } from './author';
import type { GraphMutationResponse, GraphNode } from './graph';

export interface Comment {
	content: string;
	dateGmt: string;
	karma?: number;
	author: GraphNode<Author>;
}

export type CommentMutationResponse = GraphMutationResponse<'comment', Comment>;

export interface AddCommentMutationRequest {
	id: number;
	content: string;
	author: string;
}