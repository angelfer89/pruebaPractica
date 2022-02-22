import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaCuentaComponent } from './alta-cuenta/alta-cuenta.component';
import { ListaCuentasComponent } from './lista-cuentas/lista-cuentas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: ListaCuentasComponent
      },
      {
        path: 'alta-cuenta',
        component: AltaCuentaComponent
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
export class CuentasRoutingModule { }
