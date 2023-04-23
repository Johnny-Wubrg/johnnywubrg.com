import type { Author } from './author';
import type { GraphMutationResponse, GraphNode } from './graph';

export interface Comment {
	content: string;
	dateGmt: string;
	karma?: number;
	author: GraphNode<Author>;
}

export interface CommentMutationResponse extends GraphMutationResponse<'comment', Comment> {
}