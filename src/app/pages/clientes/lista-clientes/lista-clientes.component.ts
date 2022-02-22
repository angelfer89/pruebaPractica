import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente, Genero } from '../clientes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  displayAltaCliente: boolean = false;

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.ObtenerClientes();
  }

  ObtenerClientes(){
    this.clientesService.obtenerClientes()
        .subscribe( clientes => {
          this.clientes = clientes;
        });
  }

  showAltaCliente() {
    this.displayAltaCliente = true;
  }

  ClienteAgregado(data: boolean) {
    this.ObtenerClientes();
    this.displayAltaCliente = false;
  }

}
