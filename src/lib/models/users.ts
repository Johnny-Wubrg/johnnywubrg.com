import type { GraphNodes, GraphQueryResponse } from './graph';
import type { Role } from './role';

export interface Author {
	name: string;
}

export interface User extends Author {
	id: string;
	roles?: GraphNodes<Role>;
}

export type ViewerQueryResponse = GraphQueryResponse<'viewer', User>;
