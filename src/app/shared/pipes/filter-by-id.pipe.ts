import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {

  transform(items: any[], minId: number): any[] {
    console.log(items, minId)
    return items.filter(item => item.id >= minId);
  }

}
