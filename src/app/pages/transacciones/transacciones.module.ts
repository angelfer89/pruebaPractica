import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { DepositoComponent } from './deposito/deposito.component';
import { RetiroComponent } from './retiro/retiro.component';
import { PrimeModule } from '../../shared/prime/prime.module';
import { TransaccionesRoutingModule } from './transacciones-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovimientosComponent,
    DepositoComponent,
    RetiroComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    TransaccionesRoutingModule,
    FormsModule
  ],
  exports: [
    DepositoComponent,
    RetiroComponent,
    MovimientosComponent
  ]
})
export class TransaccionesModule { }
