import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {

    return value?.replace('_', ' ') || '---'
  }

}
