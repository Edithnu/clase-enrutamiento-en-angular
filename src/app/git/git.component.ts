import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent {
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
