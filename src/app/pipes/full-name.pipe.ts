import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var array = [];

    if (value.surname    && (value.surname    !== '')) { array.push(value.surname); }
    if (value.name       && (value.name       !== '')) { array.push(value.name); }
    if (value.patronymic && (value.patronymic !== '')) { array.push(value.patronymic); }

    return array.join(' ');
  }

}
