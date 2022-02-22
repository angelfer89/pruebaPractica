import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { DepositoComponent } from './deposito/deposito.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movimientos/:id',
        component: MovimientosComponent
      },
      {
        path: 'deposito/:id',
        component: DepositoComponent
      },
      {
        path: 'retiro/:id',
        component: RetiroComponent
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
export class TransaccionesRoutingModule { }
