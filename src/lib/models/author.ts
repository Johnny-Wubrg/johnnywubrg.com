import type { GraphNodes } from './graph';
import type { Role } from './role';

export interface Author {
	id: string;
	name: string;
	roles?: GraphNodes<Role>;
}
