import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaCuentaComponent } from './alta-cuenta/alta-cuenta.component';
import { ListaCuentasComponent } from './lista-cuentas/lista-cuentas.component';
import { CuentasRoutingModule } from './cuentas-routing.module';
import { PrimeModule } from '../../shared/prime/prime.module';
import { TransaccionesModule } from '../transacciones/transacciones.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AltaCuentaComponent,
    ListaCuentasComponent
  ],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    PrimeModule,
    TransaccionesModule,
    FormsModule
  ]
})
export class CuentasModule { }
