import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByOS'
})
export class FilterByOSPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
