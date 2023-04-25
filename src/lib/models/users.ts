import type { GraphNodes, GraphQueryResponse } from './graph';
import type { Role } from './role';

export interface Author {
	name: string;
}

export interface User extends Author {
	id: string;
	roles?: GraphNodes<Role>;
	badge?: UserBadge;
}

export interface UserBadge {
	label: string;
	rarityCode: string;
}

export type ViewerQueryResponse = GraphQueryResponse<'viewer', User>;
