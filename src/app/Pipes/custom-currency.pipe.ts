import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    return `LE ${value.toFixed(2)} ${args[0]}`;
  }

}
