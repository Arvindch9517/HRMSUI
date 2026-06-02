
import { Component, Input, input } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component/sidebar.component';
import { HeaderComponent } from '../../header/header.component/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports:[ CommonModule,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
@Input()
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed =
      !this.isSidebarCollapsed;
  }
}