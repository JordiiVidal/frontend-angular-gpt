import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Routes } from '@angular/router';
import { SidebarMenuItemComponent } from '../sidebar-menu-item/sidebar-menu-item.component';
import { SidebarMenu } from './sidebar-menu';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, SidebarMenuItemComponent],
  template: `
    @for (item of sidebarMenuList.items; track item.path) {
    <app-sidebar-menu-item [item]="item" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  @Input({ required: true }) routes!: Routes;
  public sidebarMenuList!: SidebarMenu;

  ngOnInit(): void {
    this.sidebarMenuList = SidebarMenu.createFromRoutes(this.routes);
  }
}
