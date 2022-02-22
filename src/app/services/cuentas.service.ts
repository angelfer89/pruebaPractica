import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from '../pages/cuentas/cuentas.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private  baseUrl: string = environment.baseUrlBanco;

  constructor(private http: HttpClient) { }

  altaCuenta( cuenta: Cuenta): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post<any>( this.baseUrl + '/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=' + token + '', cuenta);
  }

  obtenerCuentas(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>( this.baseUrl + '/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=' + token + '');
  }
}
