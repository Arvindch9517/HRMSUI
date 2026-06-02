import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  throwError,
  switchMap
} from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.auth.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      catchError((error): Observable<HttpEvent<any>> => {

        if (error.status === 401) {
          return this.handleRefreshToken(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handleRefreshToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return this.auth.refreshToken().pipe(
      switchMap((response: any): Observable<HttpEvent<any>> => {

        this.auth.saveToken(response);

        const clonedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${response.accessToken}`
          }
        });

        return next.handle(clonedRequest);
      })
    );
  }
}