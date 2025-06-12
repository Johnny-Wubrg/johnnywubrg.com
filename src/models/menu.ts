export interface MenuItem {
  path: string;
  label: string;
  childItems?: MenuItem[];
}