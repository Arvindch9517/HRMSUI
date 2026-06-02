import { Router } from "@angular/router";
import { AuthService } from "../../../core/services/auth.service";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  UserName='';
  password='';

  constructor(
    private auth:AuthService,
    private router:Router
  ){}

  login(){

    const payload={
      UserName:this.UserName,
      password:this.password
    };

    this.auth.login(payload)
      .subscribe({
        next:(res)=>{

          this.auth.saveToken(res);

          this.router.navigate(['/dashboard']);
        }
      });
  }
}