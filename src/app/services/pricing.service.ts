import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionPackageResponse } from '../models/subscription/subscription-package-response';
import { Urls } from '../shared/Urls';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * [GET] Fetches All Subscription Packages
   * 
   * @returns {Observable<any>}
   * ------------------------------------------------------------------
   */
  fetchAllSubscriptionPackages(): Observable<SubscriptionPackageResponse> {

    return this.httpClient.get<SubscriptionPackageResponse>(Urls.getAllSubscriptionURL);
  }
}
