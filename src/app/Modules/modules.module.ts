import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { CriteriosConsultaComponent } from './criterios-consulta/criterios-consulta.component';

@NgModule({
  declarations: [TipoCuentaComponent, CriteriosConsultaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TipoCuentaComponent,
  ]
})
export class ModulesModule { }