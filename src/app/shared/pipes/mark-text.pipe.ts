import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markText'
})
export class MarkTextPipe implements PipeTransform {

  transform(value: any, arg1:string = ""): any {
    return value.toLowerCase().includes(arg1.toLowerCase())? '*' + value + '*': value
  }

}
