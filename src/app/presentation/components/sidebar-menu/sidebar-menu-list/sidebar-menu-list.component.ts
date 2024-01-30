import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarMenuRoutes } from '@sidebarMenu/interfaces/sidebar-menu-routes';
import { SidebarMenuList } from '@sidebarMenu/models/sidebar-menu-list';
import { SidebarMenuItemComponent } from '@sidebarMenu/sidebar-menu-item/sidebar-menu-item.component';

@Component({
  selector: 'app-sidebar-menu-list',
  standalone: true,
  imports: [CommonModule, SidebarMenuItemComponent],
  template: `
    @for (item of sidebarMenuList.items; track item.path) {
    <app-sidebar-menu-item [item]="item" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuListComponent implements OnInit {
  @Input({ required: true }) routes!: Routes;
  public sidebarMenuList!: SidebarMenuList;

  ngOnInit(): void {
    this.sidebarMenuList = new SidebarMenuList(
      this.routes as SidebarMenuRoutes
    );
  }
}
