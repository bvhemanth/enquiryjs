import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {

    if(!searchText) return value;

    searchText =searchText.toLowerCase();
    console.log(value)
    return  value.filter(data=>{
      return data.name.toLowerCase().includes(searchText) || data.description.toLowerCase().includes(searchText);
    })
  }

}
