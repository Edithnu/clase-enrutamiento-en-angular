import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
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
