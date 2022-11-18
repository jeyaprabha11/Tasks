import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  
  transform(value: any, ...args: unknown[]): any {
    return value?.toUpperCase();
    //return value?.toLowerCase();
    
    
  }

}
