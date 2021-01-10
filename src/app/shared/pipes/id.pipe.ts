import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(workers,sorting,direction) {

    if(sorting==='id') {
      if(direction)
        return workers.sort((a, b) => a.id - b.id)
        else return workers.sort((a, b) => b.id - a.id)}
    if(sorting==='bd'){
      if(direction)
        return  workers.sort(function(a, b) {
          a = new Date(a.bd);
          b = new Date(b.bd);
        return a>b ? -1 : a<b ? 1 : 0;})
          else
            return  workers.sort(function(a, b) {
              a = new Date(a.bd);
              b = new Date(b.bd);
            return a>b ? 1 : a<b ? -1 : 0;})   
  }
  }

}
