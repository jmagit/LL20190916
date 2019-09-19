import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COMPONENTES_PERSONAS } from './componente.component';
import { IndraCoreModule } from 'src/indra-core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    COMPONENTES_PERSONAS,
  ],
  exports: [
    COMPONENTES_PERSONAS,
  ],
  imports: [
    CommonModule, FormsModule, HttpClientModule, IndraCoreModule, AppRoutingModule,
  ]
})
export class PersonasModule { }
