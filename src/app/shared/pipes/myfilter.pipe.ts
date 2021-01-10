import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers, searchworker: string): unknown {
    if (!searchworker) {
      return workers;
      }
    else{
      let filteredItems = workers.filter(
        (item) =>
        (item.name === searchworker || item.surname === searchworker));
          return filteredItems
        }
         
    }
        

}  

