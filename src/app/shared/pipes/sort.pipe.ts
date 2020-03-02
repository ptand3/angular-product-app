// ng g pipe shared/pipes/sort.pipe.ts
//shared/pipes/sort.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false // by default is true
})
export class SortPipe implements PipeTransform {

  // stateful pipe
  sortedItems: any[];
  actualItems: any[];

  // transform is called all times if pure is set to false
  // transform is called 
  // whenever object changed if pure set to true
  transform(items: any[], 
           fieldName: string, 
           order: string = 'asc'): any {

    console.log('sort pipe transform called', items, fieldName)
    if (!items || !fieldName) {
      return items;
    }

    if (items !== this.actualItems) {
      this.actualItems = items;
    } // FIXME

    console.log('in sort', order);

    if (order === 'desc') {
      return items.sort ( (left, right) => {
      //  console.log(left, right);
        if (left[fieldName] < right[fieldName])
          return 1;
  
          if (left[fieldName] > right[fieldName])
          return -1;
  
        return 0;
      })
    }

    //FIXME: 
    // desc
    return items.sort ( (left, right) => {
      console.log(left, right);
      if (left[fieldName] < right[fieldName])
        return -1;

        if (left[fieldName] > right[fieldName])
        return 1;

      return 0;
    })

  }

}