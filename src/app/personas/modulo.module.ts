import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPONENTES_PERSONAS } from './componente.component';
import { IndraCoreModule } from 'src/indra-core';

@NgModule({
  declarations: [
    COMPONENTES_PERSONAS,
  ],
  exports: [
    COMPONENTES_PERSONAS,
  ],
  imports: [
    CommonModule, FormsModule, IndraCoreModule,
  ]
})
export class PersonasModule { }
