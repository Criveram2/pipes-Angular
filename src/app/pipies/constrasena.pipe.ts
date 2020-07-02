import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena',
})
export class ConstrasenaPipe implements PipeTransform {
  transform(value: string, ocultar: boolean = false): string {
    return (ocultar) ? '*'.repeat(value.length) : value;
  }
}
