import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Urls } from './shared/Urls';
import { environment } from '../environments/environment';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ provideZoneChangeDetection({ eventCoalescing: true }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" }), withRouterConfig({ onSameUrlNavigation: 'reload' })),
    provideHttpClient(withFetch()),
    Urls,
    [
      {
        provide: LocationStrategy,
        useClass: environment.useHash ? HashLocationStrategy : PathLocationStrategy
      }
    ], provideClientHydration(withEventReplay()) ]
};

