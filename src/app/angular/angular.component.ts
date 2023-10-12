import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
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
