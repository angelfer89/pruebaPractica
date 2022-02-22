import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeModule { }
