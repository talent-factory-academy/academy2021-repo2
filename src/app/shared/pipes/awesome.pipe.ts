import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

  transform(value: string, symbol1: string = '', symbol2: string = ''): string {
    return value.split(symbol1).join(symbol2)
  }

}
