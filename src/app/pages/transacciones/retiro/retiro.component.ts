import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';
import { Cuenta } from '../../cuentas/cuentas.interface';
import { Movimiento } from '../transacciones.interface';
import { CuentasService } from '../../../services/cuentas.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  
  @Input() idCliente = 0;
  @Output() retiroRealizadoEvent = new EventEmitter<boolean>();

  cuentaSeleccionada: string = '';

  cuentas: Cuenta[] = []

  movimiento: Movimiento = {
    fechaUltimaAct: (new Date()).toString(),
    monto:          0,
    numeroCuenta:   '',
    terminal:       'TERM235',
    tipo:           'Retiro',
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

  RealizarRetiro(){
    this.movimiento.numeroCuenta = this.cuentaSeleccionada;
    this.transaccionesService.registrarTransaccion(this.movimiento)
    .subscribe( resp => {
      this.retiroRealizadoEvent.emit(true);
    })
  }

}
