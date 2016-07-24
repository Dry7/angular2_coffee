import { Pipe, PipeTransform } from '@angular/core';
import {StringHelper} from "../helpers/StringHelper";

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return StringHelper.phone(value);
  }

}
