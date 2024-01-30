import { SidebarMenuItem } from '../sidebar-menu-item/sidebar-menu-item';
import { SidebarMenuRoutes } from '../sidebar-menu-routes';

export class SidebarMenuList {
  private _items: SidebarMenuItem[];

  constructor(routes: SidebarMenuRoutes) {
    this._items = this.itemsFromRoutes(routes);
  }

  get items(): SidebarMenuItem[] {
    return this._items;
  }

  private itemsFromRoutes(routes: SidebarMenuRoutes): SidebarMenuItem[] {
    return routes
      .filter((r) => r.data)
      .map(({ path, data }) => new SidebarMenuItem(path!, data));
  }
}
