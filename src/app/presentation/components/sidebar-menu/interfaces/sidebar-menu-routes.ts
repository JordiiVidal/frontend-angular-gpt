export declare type SidebarMenuRoutes = SidebarMenuRoute[];

interface SidebarMenuRoute {
  path: string;
  data: SidebarMenuRouteData;
}

interface SidebarMenuRouteData {
  icon: string;
  title: string;
  description: string;
}
