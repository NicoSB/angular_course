import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort(this.compare);
  }

  compare(a,b) {
    if (a.name < b.name) {
      return -1;
    }
    if(a.name > b.name) {
      return 1;
    }
    return 0;
  }
}
