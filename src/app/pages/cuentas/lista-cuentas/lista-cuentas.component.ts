import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuentas.interface';
import { CuentasService } from '../../../services/cuentas.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-cuentas',
  templateUrl: './lista-cuentas.component.html',
  styleUrls: ['./lista-cuentas.component.css']
})
export class ListaCuentasComponent implements OnInit {

  displayDeposito: boolean = false;
  displayRetiro: boolean = false;
  displayMovimientos: boolean = false;
  displayAltaCuenta: boolean = false;

  cuentas: Cuenta[] = []; 
  idCliente: number = 0; 
  numeroCuenta: string = '';

  constructor( private cuentaService: CuentasService,
               private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.idCliente = parseInt(paramMap.get('id')!);
      this.ObtenerCuentas();
    })
    
  }

  ObtenerCuentas(){
    this.cuentas = [];
    this.cuentaService.obtenerCuentas()
        .subscribe(cuentas => {
          for (var cuenta in cuentas) {
            if((cuentas[cuenta].idCliente == this.idCliente ))   
              this.cuentas.push(cuentas[cuenta]);
          }
        });
  }

  showAltaCuenta() {
    this.displayAltaCuenta = true;
  }

  showDeposito() {
    this.displayDeposito = true;
  }

  showRetiro() {
    this.displayRetiro = true;
  }

  showMovimientos() {
    this.displayMovimientos = true;
  }

  CuentaAgregada(data: boolean) {
    this.ObtenerCuentas();
    this.displayAltaCuenta = false;
  }

  DepositoRealizado(newItem: boolean) {
    this.ObtenerCuentas();
    this.displayDeposito = false;
  }

  RetiroRealizado(newItem: boolean) {
    this.ObtenerCuentas();
    this.displayRetiro = false;
  }

}
