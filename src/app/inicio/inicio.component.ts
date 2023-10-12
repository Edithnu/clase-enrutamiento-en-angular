import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    nombre: string;
    materia: string;

    constructor() {
      this.nombre = "Proyecto";
      this.materia = "";
    }

    ngOninit(): void {
      
    }
    getMateria(): string {
      return this.materia = "Diseño de interfaces"

    }
    }
