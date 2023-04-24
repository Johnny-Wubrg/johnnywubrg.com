import type { User } from './users';
import type { Category } from './categories';
import type { Comment } from './comments';
import type { GraphNode, GraphNodes, GraphQueryResponse } from './graph';
import type { Medium } from './media';

export interface FeaturedCardSettings {
	featuredCard: string;
}

export interface SeoSettings {
	title: string;
	description: string;
}

export interface Post {
	databaseId: number;
	postId: number;
	date: string;
	title: string;
	uri: string;
	excerpt: string;
	content: string;
	author: GraphNode<User>;
	categories: GraphNodes<Category>;
	featuredImage?: GraphNode<Medium>;
	comments?: GraphNodes<Comment>;
	seo: SeoSettings;
}

export type PageQueryResponse = GraphQueryResponse<'page', Post>;

export type PostQueryResponse = GraphQueryResponse<'post', Post>;

export type PostsQueryResponse = GraphQueryResponse<'posts', GraphNodes<Post>>;
