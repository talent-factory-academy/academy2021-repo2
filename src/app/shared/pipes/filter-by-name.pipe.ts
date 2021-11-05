import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any[], name: string): any[] {
    return items.filter(item => {
      const findIndex = item.name.toLowerCase().indexOf(name.toLowerCase())
      return findIndex >= 0
    })
  }


}
