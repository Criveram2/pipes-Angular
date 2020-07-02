import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    const constructorRespuesta: string = value.toLowerCase();
    let palabras = constructorRespuesta.split(' ');
    if (todas) {
      palabras = palabras.map((palabra) => {
        return palabra[0].toUpperCase() + palabra.substr(1);
      });
    } else {
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
      return palabras[0];
    }
    return palabras.join(' ');
  }
}
