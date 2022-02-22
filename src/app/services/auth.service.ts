import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Auth } from '../pages/auth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private  baseUrl: string = environment.baseUrlLogin;

  constructor(private http: HttpClient) { }

  login( user: Auth): Observable<any[]> {
    return this.http.post<any>( this.baseUrl + '/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI', user)
    .pipe(
      tap((auth: any) => localStorage.setItem('token', auth['idToken']) )
    );
  }

}
