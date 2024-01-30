import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleAttr',
  standalone: true,
})
export class ToggleAttributePipe implements PipeTransform {
  transform(condtion: boolean): unknown {
    return condtion ? 'on' : 'off';
  }
}
