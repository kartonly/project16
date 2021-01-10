import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bd'
})
export class BdPipe implements PipeTransform {

  transform(workers,sorting,direction) {

    if(sorting==='birthday')
    {
      if(direction)
      return  workers.sort(function(a, b) {
          a = new Date(a.birthday);
          b = new Date(b.birthday);
          return a>b ? -1 : a<b ? 1 : 0;})
          else
          return  workers.sort(function(a, b) {
            a = new Date(a.birthday);
            b = new Date(b.birthday);
            return a>b ? 1 : a<b ? -1 : 0;})  
  }
  }
}
