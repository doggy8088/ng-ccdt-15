import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twdate'
})
export class TwdatePipe implements PipeTransform {

  transform(value: Date): string {
    const year = value.getFullYear() - 1911;
    const month = value.getMonth() + 1;
    const date = value.getDate();

    return `民國 ${year} 年 ${month} 月 ${date} 日`;
  }

}
