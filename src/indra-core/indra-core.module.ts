import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDACIONES } from './directives/validaciones.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, SizerComponent, PIPES_NUMERICOS, MIS_VALIDACIONES,
  ],
  exports: [
    PIPES_CADENAS, SizerComponent, PIPES_NUMERICOS, MIS_VALIDACIONES,
  ],
  imports: [
    CommonModule
  ]
})
export class IndraCoreModule { }
