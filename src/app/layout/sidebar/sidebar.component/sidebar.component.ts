import { CommonModule } from "@angular/common";
import { Component, Input, OnInit,ChangeDetectorRef  } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuService } from "../../../core/services/menu.service";
import { Menu } from "../../../core/Model/menu";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(
    private _menu: MenuService,
    private cd: ChangeDetectorRef) { }
  user = JSON.parse(localStorage.getItem('user') || '{}');
  empid = this.user.id;
  menus: any[] = [];
 openMenu: number | null = null;
  ngOnInit() {
    console.log("side bar called");
    this.loadmenu();
     }
  loadmenu() {
    console.log("load menthod called");
    this._menu.getMenus(this.empid).subscribe({
      next: (data) => {
        this.menus = data;
        console.log(this.menus);
        this.cd.detectChanges();
      }
    });
  }
  toggle(selectedMenu: any) {
  this.menus.forEach(menu => {
    if (menu !== selectedMenu) {
      menu.expanded = false;   // close others
    }
  });

  selectedMenu.expanded = !selectedMenu.expanded; // toggle clicked one
}
  @Input()
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
  togglemenu(index: number) {
  this.openMenu = this.openMenu === index ? null : index;
}
}
