import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Cliente } from '../pages/clientes/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Cliente[] = [];

  constructor() { }

  obtenerClientes(){
    if(!localStorage.getItem('clientes')){
      return of (this.clientes);
    }

    const res= localStorage.getItem('clientes');
    this.clientes = JSON.parse(res!);
    return of (this.clientes);
  }

  agregarCliente( cliente : Cliente){
    this.obtenerClientes();
    this.clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }
}
