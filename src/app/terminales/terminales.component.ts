import { Component } from '@angular/core';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent {
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
