import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movimiento } from '../transacciones.interface';
import { TransaccionesService } from '../../../services/transacciones.service';
import { CuentasService } from '../../../services/cuentas.service';
import { Cuenta } from '../../cuentas/cuentas.interface';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  @Input() idCliente = 0;
  @Output() depositoRealizadoEvent = new EventEmitter<boolean>();

  displayDeposito: boolean = false;
  cuentas: Cuenta[] = [];
  cuentaSeleccionada: string = '';

  movimiento: Movimiento = {
    fechaUltimaAct: (new Date()).toString(),
    monto:          0,
    numeroCuenta:   '',
    terminal:       'TERM235',
    tipo:           'Deposito',
    usuario:        'u-231'
  }

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

  RealizarDeposito(){
    this.movimiento.numeroCuenta = this.cuentaSeleccionada;
    this.transaccionesService.registrarTransaccion(this.movimiento)
    .subscribe( resp => {
      this.depositoRealizadoEvent.emit(true);
    })
    
  }

}
