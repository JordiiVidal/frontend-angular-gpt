import { Routes } from '@angular/router';
import { SidebarMenuItem } from '../sidebar-menu-item/sidebar-menu-item';

export class SidebarMenu {
  items: SidebarMenuItem[];

  constructor() {
    this.items = [];
  }

  static createFromRoutes(routes: Routes): SidebarMenu {
    return routes
      .filter((r) => r.data)
      .reduce((itemList, { path, data }) => {
        const { icon, title, description } = data!;
        const item = new SidebarMenuItem(path!, icon, title, description);
        itemList.items.push(item);
        return itemList;
      }, new SidebarMenu());
  }
}
