import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente, Genero } from '../clientes.interface';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  @Output() clienteAgregadoEvent = new EventEmitter<boolean>();

  cliente: Cliente = {
    nombre:         '',
    id:             '',
    direccion:      '',
    edad:           0,
    genero:         Genero.Masculino
  } 

  constructor(private clientesService : ClientesService) { }

  ngOnInit(): void {
  }

  AgregarCliente(){
    // Guardar en el storage
    console.log(this.cliente);
    this.clientesService.agregarCliente(this.cliente);
    this.clienteAgregadoEvent.emit(true);
  }


}
