import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtformatter'
})
export class TxtformatterPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    if(!value)
    return null;

    return value.length > args ? value.substr(0, args) : value;
  }

}
