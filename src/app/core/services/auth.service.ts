import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7058/api/Auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(data:any) {
      return this.http.post<any>(
      `${this.apiUrl}/login`,
      data
    );
  }

  refreshToken() {

    return this.http.post<any>(
      `${this.apiUrl}/refresh-token`,
      {
        refreshToken:
          localStorage.getItem('refreshToken')
      }
    );
  }

  saveToken(response:any){

    localStorage.setItem(
      'accessToken',
      response.accessToken
    );

    localStorage.setItem(
      'refreshToken',
      response.refreshToken
    );
  }

  logout(){

    localStorage.clear();

    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  isLoggedIn(){
    return !!this.getToken();
  }
}