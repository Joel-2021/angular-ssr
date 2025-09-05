import { Pipe, PipeTransform } from '@angular/core';
import { SubscriptionPackage } from '../models/subscription/subscription-package';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(subscriptionPackage: SubscriptionPackage, ...args: any[]): any {

    const currency = '₹';
    const currencyName = null;

    const show1: boolean = args[ 0 ] === 'show1';

    if ( subscriptionPackage.listedPrice < subscriptionPackage.basePrice ) {

      if (show1) {

        return `<small class="currency">${ currency }</small>${ subscriptionPackage.listedPrice }</span>
              <del class="base-price" style="font-weight: 500; opacity: 0.8;">
                 ${ currency }${ subscriptionPackage.basePrice }
              </del>
              <span class="currency-name">(${ currency === '₹' ? 'INR' : currencyName })</span>`;
      } else  {

        return `<small class="currency">${ currency }</small>${ subscriptionPackage.listedPrice }
              <span class="currency-name">(${ currency === '₹' ? 'INR' : currencyName })</span>
              <del class="base-price" style="font-weight: 500; opacity: 0.8;">
                 ${ currency }${ subscriptionPackage.basePrice } <span class="currency-name">(${ currency === '₹' ? 'INR' : currencyName })</span>
              </del>`;
      }
    }

    return `<small class="currency">${ currency }</small> ${ subscriptionPackage.listedPrice }`;
  }

}
