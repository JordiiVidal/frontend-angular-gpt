import { SidebarMenuItem } from '../sidebar-menu-item/sidebar-menu-item';
import { routes } from '../../../app.routes';

export class SidebarMenu {
  private _items: SidebarMenuItem[];

  constructor(routes: SidebarMenuRoute[]) {
    this._items = this.itemsFromRoutes(routes);
  }

  get items(): SidebarMenuItem[] {
    return this._items;
  }

  private itemsFromRoutes(routes: SidebarMenuRoute[]): SidebarMenuItem[] {
    return routes
      .filter((r) => r.data)
      .map(({ path, data }) => new SidebarMenuItem(path!, data));
  }
}

export interface SidebarMenuRoute {
  path: string;
  data: any;
}
