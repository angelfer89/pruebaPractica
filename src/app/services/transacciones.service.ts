import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../pages/transacciones/transacciones.interface';


@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  private  baseUrl: string = environment.baseUrlBanco;

  constructor(private http: HttpClient) { }

  registrarTransaccion( movimiento: Movimiento): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post<any>( this.baseUrl + '/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=' + token + '', movimiento);
  }

  obtenerTransaccciones(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>( this.baseUrl + '/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=' + token + '');
  }

}
