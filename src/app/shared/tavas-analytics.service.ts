import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import tavas from 'tavas-js';

@Injectable({
  providedIn: 'root'
})
export class TavasAnalyticsService {

  constructor() {
  }

  /**
   * Initialize Tavas instance
   * @returns {void}
   * ----------------------------------------------------------------
   */
  static initTavas(): void {

    try {

      if (environment.tavas.isEnabled) {

        tavas.init(environment.tavas.apiKey, {
          api_host: environment.tavas.host,
          loaded: () => {

            console.log('Tavas initialized');
          },
          autocapture: false
        });
      }
    } catch (e) {

      console.error(`Unable to init Tavas`);
    }
  }

  /**
   * Helper function to capture Tavas events
   * @param eventName - Tavas Event Name
   * @param properties - Tavas Event Properties
   * ----------------------------------------------------------------
   */
  static capture(eventName: string, properties: any = {}): void {

    try {

      tavas.capture(eventName, properties);
    } catch (e) {

      console.log(`Unable to capture Tavas Event =>`, e);
    }
  }
}
