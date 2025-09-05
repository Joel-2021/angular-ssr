import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AppRoutes } from './models/core/app-routes.enum';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NotifyService } from './shared/notify.service';
import { TavasAnalyticsService } from './shared/tavas-analytics.service';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private activatedRoute: ActivatedRoute,
              private notifyService: NotifyService,
              private router: Router, private title: Title) {

    if (isPlatformBrowser(this.platformId)) {

      TavasAnalyticsService.initTavas();
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')) //mergeMap( route => route.data )
      .subscribe((event) => {

        // @ts-ignore
        const title: string = event.data[ `_value` ][ `breadcrumb` ];
        // @ts-ignore
        const route: string = event.snapshot[ '_routerState' ].url;
        // @ts-ignore
        const screenName: string = event.data[ `_value` ][ `screenName` ];

        if (route.includes(`legal`)) {

          let legalTitle = 'Legal';

          if (route.includes(AppRoutes.TERMS_OF_USE)) {

            legalTitle = `Terms of Use`;

          } else if (route.includes(AppRoutes.PRIVACY_POLICY)) {

            legalTitle = `Privacy Policy`;

          } else if (route.includes(AppRoutes.REFUND_POLICY)) {

            legalTitle = `Refund Policy`;
          }

          this.title.setTitle(`ChottuLink | ${ legalTitle }`);

        } else {

          this.title.setTitle(`ChottuLink | ${ title }`);
        }
      });
  }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {

      document.querySelector('app-root')?.classList.add('loaded');
    }
  }
}
