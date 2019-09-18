import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTES_PERSONAS } from './componente.component';

@NgModule({
  declarations: [
    COMPONENTES_PERSONAS,
  ],
  exports: [
    COMPONENTES_PERSONAS,
  ],
  imports: [
    CommonModule
  ]
})
export class PersonasModule { }
