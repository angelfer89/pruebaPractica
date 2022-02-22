import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ListaClientesComponent,
    children: [
      {
        path: 'alta-cliente',
        component: AltaClienteComponent
      }
    ]
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientesRoutingModule { }
