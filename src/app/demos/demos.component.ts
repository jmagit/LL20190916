import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../app-common';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  nombre = 'mundo';
  listado = [
    { id: 1, nombre: 'Barcelona'},
    { id: 2, nombre: 'lleida'},
    { id: 3, nombre: 'GIRONA'},
    { id: 4, nombre: 'TarragonA'},
  ];
  idProvincia = 2;

  visible = true;
  estetica = { importante: true, error: false, urgente: true };

  resultados: string = null;

  constructor(public notify: NotificationService) { }

  ngOnInit() {
  }

  saluda() {
    this.resultados = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultados = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultados = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number) {
    return a + b;
  }

  add(nombre: string) {
    const id = this.listado.length > 0 ? this.listado[this.listado.length - 1].id + 1 : 1;
    this.listado.push({ id, nombre });
    this.idProvincia = id;
  }

}
