import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }


  /**
   * Retrieves client environment information such as browser name, version, operating system, and user agent.
   *
   * This utility inspects the `navigator` object to extract browser details and OS type, returning a standardized
   * object containing useful metadata.
   *
   * @static
   *
   * @returns {{
   *   browserName: string;
   *   fullVersion: string;
   *   majorVersion: number;
   *   appName: string;
   *   userAgent: string;
   *   os: string;
   *   platform: string;
   * }} An object containing browser and system information.
   * ----------------------------------------------------------------
   */
  static getExtraInfo(): {
    browserName: string;
    fullVersion: string;
    majorVersion: number;
    appName: string;
    userAgent: string;
    os: string;
    platform: string;
  } {
    const nAgt = navigator.userAgent;
    const nVer = navigator.appVersion;
    const appName = navigator.appName;
    let browserName = appName;
    let fullVersion = '' + parseFloat(nVer);
    let majorVersion = parseInt(nVer, 10);
    let os = 'Unknown OS';

    // OS detection
    if ( /Win/.test(nVer) ) os = 'Windows';
    else if ( /Mac/.test(nVer) ) os = 'MacOS';
    else if ( /X11/.test(nVer) ) os = 'UNIX';
    else if ( /Linux/.test(nVer) ) os = 'Linux';

    // Browser detection
    if ( /Opera|OPR\//.test(nAgt) ) {
      browserName = 'Opera';
      fullVersion = nAgt.match(/(Opera|OPR)\/(\d+(\.\d+)?)/)?.[ 2 ] || fullVersion;
    } else if ( /MSIE/.test(nAgt) ) {
      browserName = 'Internet Explorer';
      fullVersion = nAgt.match(/MSIE (\d+(\.\d+)?)/)?.[ 1 ] || fullVersion;
    } else if ( /Chrome/.test(nAgt) ) {
      browserName = 'Chrome';
      fullVersion = nAgt.match(/Chrome\/(\d+(\.\d+)?)/)?.[ 1 ] || fullVersion;
    } else if ( /Safari/.test(nAgt) && /Version/.test(nAgt) ) {
      browserName = 'Safari';
      fullVersion = nAgt.match(/Version\/(\d+(\.\d+)?)/)?.[ 1 ] || fullVersion;
    } else if ( /Firefox/.test(nAgt) ) {
      browserName = 'Firefox';
      fullVersion = nAgt.match(/Firefox\/(\d+(\.\d+)?)/)?.[ 1 ] || fullVersion;
    } else {
      const match = nAgt.match(/([a-zA-Z]+)\/(\d+(\.\d+)?)/);
      if ( match ) {
        browserName = match[ 1 ];
        fullVersion = match[ 2 ];
      }
    }

    majorVersion = parseInt(fullVersion, 10);
    if ( isNaN(majorVersion) ) {
      majorVersion = parseInt(nVer, 10);
    }

    return {
      browserName,
      fullVersion,
      majorVersion,
      appName,
      userAgent: nAgt,
      os,
      platform: 'CL-CLIENT',
    };
  }


  /**
   * Unsubscribes from all active subscriptions in the provided array.
   *
   * This method iterates over the given list of RxJS `Subscription` objects
   * and unsubscribes from each, ensuring that no memory leaks occur.
   *
   * @static
   *
   * @param {Subscription[]} subscriptions - An array of RxJS subscriptions to be unsubscribed.
   * @returns {void}
   * ----------------------------------------------------------------
   */
  static unsubscribe(subscriptions: Subscription[]): void {

    if ( subscriptions.length > 0 ) {

      subscriptions.forEach(subscription => subscription.unsubscribe());
    }
  }

  /**
   * Extracts the status and error code from an error object.
   *
   * @param {any} error - The error object to extract information from.
   * @returns {{ status: number, code: number, label: string }} An object containing the HTTP status and a specific error code.
   *
   * @example
   * const result = UtilityService.errorCode(error);
   * console.log(result.status); // 400
   * console.log(result.code); // 1002 or default 1001
   * console.log(result.code); // 1002 or default 1001
   * console.log(result.label); // [400-1001]
   * ----------------------------------------------------------------
   */
  static getErrorCode(error: any): { status: number, code: number, label: string } {

    return {
      status: error.status,
      code: error?.error?.code || 1001,
      label: `[${ error.status }-${ error?.error?.code || 1001 }]`
    };
  }

  /**
   * Observes the intersection of the specified element with the bottom of the viewport, emitting a boolean value
   * indicating whether the element is fully visible in the viewport.
   *
   * @param {Element} element The DOM element to observe for intersection with the viewport.
   * @return {Observable<boolean>} An observable that emits `true` when the element is fully visible and `false` otherwise.
   * ----------------------------------------------------------------
   */
  static watchBottomIntersection(element: Element): Observable<boolean> {

    return new Observable<boolean>(observer => {

      const intersectionObserver = new IntersectionObserver(
        entries => observer.next(entries[ 0 ].isIntersecting),
        { threshold: 1.0 }
      );

      intersectionObserver.observe(element);

      return () => {
        intersectionObserver.disconnect();
      };
    });
  }

  /**
   * Returns true if user is on any mobile device else it will be false
   *
   * @return {Observable<boolean>} An observable that emits `true` when the element is fully visible and `false` otherwise.
   * ----------------------------------------------------------------
   */
  static isMobileDevice(): boolean {

    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
}
