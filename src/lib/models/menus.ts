import type { GraphNodes, GraphQueryResponse } from './graph';
import type { GeneralSettings } from './settings';

export interface MenuItem {
	path: string;
	label: string;
	childItems?: GraphNodes<MenuItem>;
}

export interface Menu {
	locations: string[];
	menuItems: GraphNodes<MenuItem>;
}

export type MenusQueryResponse =
  GraphQueryResponse<'menus', GraphNodes<Menu>> &
	GraphQueryResponse<'generalSettings', GeneralSettings>;
