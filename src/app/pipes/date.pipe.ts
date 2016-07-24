import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let date  = new Date(Number(value)*1000);
      let day   = (date.getDay() < 10) ? '0' + date.getDay().toString() : date.getDay();
      let month = (date.getMonth() < 9) ? '0' + (date.getMonth()+1) : date.getMonth() + 1;
      let year  = date.getFullYear();

      return day + '.' + month + ' ' + year;
  }
}
