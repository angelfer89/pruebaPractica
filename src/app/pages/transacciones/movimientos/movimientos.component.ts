import { Component, Input, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';
import { Movimiento } from '../transacciones.interface';
import { CuentasService } from '../../../services/cuentas.service';
import { Cuenta } from '../../cuentas/cuentas.interface';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  @Input() idCliente = 0;

  movimientos: Movimiento[] = [];
  cuentas: Cuenta[] = [];
  cuentaSeleccionada: string = '';

  constructor(private transaccionesService: TransaccionesService,
              private cuentaService: CuentasService) { }

  ngOnInit(): void {
    this.cuentas = [];
    this.cuentaService.obtenerCuentas()
        .subscribe(cuentas => {
          for (var cuenta in cuentas) {
            if((cuentas[cuenta].idCliente == this.idCliente ))   
              this.cuentas.push(cuentas[cuenta]);
          }
        });
  }

  ObtenerTransacciones(){
    console.log("Numero de cuenta", this.cuentaSeleccionada);
    this.movimientos = [];
    if(this.cuentaSeleccionada){
      this.transaccionesService.obtenerTransaccciones()
        .subscribe(movimientos => {
          for (var movimiento in movimientos) {
            if((movimientos[movimiento].numeroCuenta == this.cuentaSeleccionada ))   
              this.movimientos.push(movimientos[movimiento]);
          }
      });     
    }
    
  }
}
