import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Camilo';
  nombreCompleto: string = 'CaMiLo rIvEra';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  idioma: string = 'fr';
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };

  videoUrl: string = 'https://www.youtube.com/embed/y8lwG8IM82k';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 5500);
  });

  fecha: Date = new Date();

  activar: boolean = true;
}
