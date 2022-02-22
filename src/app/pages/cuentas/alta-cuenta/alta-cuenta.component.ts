import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cuenta } from '../cuentas.interface';
import { CuentasService } from '../../../services/cuentas.service';

@Component({
  selector: 'app-alta-cuenta',
  templateUrl: './alta-cuenta.component.html',
  styleUrls: ['./alta-cuenta.component.css']
})
export class AltaCuentaComponent implements OnInit {

  @Input() idCliente = 0;
  @Output() cuentaAgregadaEvent = new EventEmitter<boolean>();


  cuenta: Cuenta = {
    numeroCuenta:   '',
    estado:         'activa',
    fechaUltimaAct: (new Date()).toString(),
    idCliente:      0,
    saldo:          0.0
  };
  
  constructor(private cuentaService: CuentasService) { }

  ngOnInit(): void {
    this.cuenta.idCliente = this.idCliente;
  }

  AgregarCuenta(){
    this.cuentaService.altaCuenta(this.cuenta)
    .subscribe( resp => {
      this.cuentaAgregadaEvent.emit(true);
      window.location.reload();
    })
    
  }

}
