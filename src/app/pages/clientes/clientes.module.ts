import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { PrimeModule } from '../../shared/prime/prime.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule ,
    PrimeModule,
    FormsModule
  ]
})
export class ClientesModule { }
