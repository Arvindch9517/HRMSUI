import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl:'./header.component.css'
})
export class HeaderComponent {

  @Output()
  toggleSidebar = new EventEmitter<void>();

  toggleMenu() {
    this.toggleSidebar.emit();
  }
   showProfileMenu = false;
  userName = 'Admin';

  toggleProfileMenu(): void {
    this.showProfileMenu = !this.showProfileMenu;
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login
    window.location.href = '/login';
  }
}