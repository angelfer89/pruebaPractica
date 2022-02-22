import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path:'cuentas',
    loadChildren: () => import('./pages/cuentas/cuentas.module').then(m => m.CuentasModule)
  },
  {
    path:'transacciones',
    loadChildren: () => import('./pages/transacciones/transacciones.module').then(m => m.TransaccionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
