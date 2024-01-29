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
      .reduce((state, { path, data }) => {
        const { icon, title, description } = data!;
        const item = {
          path,
          icon,
          title,
          description,
        } as SidebarMenuItem;
        state.items.push(item);
        return state;
      }, new SidebarMenu());
  }
}
