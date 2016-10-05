import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(items: Array<any>, field: string, args: any): any {
    return items.filter((item) => {
      if (item.hasOwnProperty(field)) {
        return item[field].match(new RegExp('^' +args, 'igm')) !== null;
      }
    });
  }
}
