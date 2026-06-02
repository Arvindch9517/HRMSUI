import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

menus = [

{
 title:'Dashboard',
 icon:'🏠',
 route:'/dashboard'
},

{
 title:'Employee',
 icon:'👨‍💼',
 expanded:false,

 children:[
  {
   title:'Employee List',
   route:'/employee'
  },
  {
   title:'Attendance',
   route:'/attendance'
  }
 ]
},

{
 title:'Leave',
 icon:'📅',
 route:'/leave'
}

];

toggle(menu:any){
 menu.expanded=!menu.expanded;
}
 @Input()
collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
