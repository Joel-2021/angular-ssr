import { Pipe, PipeTransform } from '@angular/core';
import  moment from 'moment/moment';

@Pipe({
  standalone: true,
  name: 'localTime'
})
export class LocalTimePipe implements PipeTransform {

  transform(dateTime: Date | string | undefined | null,  format: string = 'DD/MM/YYYY hh:mma'): string {

    if ( dateTime !== null ) {

      let localTime = moment.utc(dateTime).toDate();
      return moment(localTime).format(format);
    }

    return moment(dateTime).format(format);
  }
}
