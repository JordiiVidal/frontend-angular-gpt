import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarMenuComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public sidebarRoutes: Routes = routes[0].children ?? [];
}
