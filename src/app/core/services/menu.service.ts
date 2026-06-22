import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../Model/menu';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'https://localhost:7273/api/Setting/GetMenu';
   constructor(private http: HttpClient) { }

   getMenus(Empid: number): Observable<any[]> {
  return this.http.get<any[]>(
    `${this.apiUrl}?empid=${Empid}`
  );
}
}
