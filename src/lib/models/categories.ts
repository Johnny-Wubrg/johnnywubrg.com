import type { GraphNodes, GraphQueryResponse } from './graph';
import type { Post } from './posts';

export interface Category {
	name: string;
	description: string;
	slug: string;
	posts?: GraphNodes<Post>;
}

export type CategoryQueryResponse = GraphQueryResponse<'category', Category>;
export type CategoriesQueryResponse = GraphQueryResponse<'categories', GraphNodes<Category>>;
