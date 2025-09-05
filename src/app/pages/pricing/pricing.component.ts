import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormatNumberPipe } from "../../pipes/format-number.pipe";
import { GetStartedCardComponent } from '../../components/get-started-card/get-started-card.component';
import { IconComponent } from "../../components/icon/icon.component";
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { NoContentComponent } from '../../components/no-content/no-content.component';
import { PricingActionsComponent } from './pricing-actions/pricing-actions.component';
import { PricingService } from '../../services/pricing.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SubscriptionPackage } from '../../models/subscription/subscription-package';
import { Title } from '@angular/platform-browser';
import { TooltipPosition } from '@angular/material/tooltip';
import { UtilityService } from '../../shared/utility.service';
import { environment } from '../../../environments/environment';
import { finalize, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [ IconComponent, FormatNumberPipe, MatProgressSpinner, RouterModule, NoContentComponent, SharedModule,
    GetStartedCardComponent, MatSliderModule, MatTableModule ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  host: {  ngSkipHydration: 'true' }
})
export class PricingComponent implements OnInit, OnDestroy {

  spinner: boolean = false;
  subscriptions: Subscription[] = [];
  subscriptionPackages: SubscriptionPackage[] = [];
  columnList: string[] = [ 'platform', 'monthlyCost', 'savings' ];
  mau: number = 50000;
  competitorList = [
    {
      platform: 'ChottuLink',
      monthlyCost: '$39/mo',
      savings: '— (Baseline)'
    },
    {
      platform: 'Airbridge',
      monthlyCost: '$420',
      savings: '$381 (91%)'
    },
    {
      platform: 'Branch.io',
      monthlyCost: '$700',
      savings: '$661 (94%)'
    },
    {
      platform: 'AppsFlyer',
      monthlyCost: '~$9,160',
      savings: '$9,121 (99.6%)'
    },
    {
      platform: 'Adjust',
      monthlyCost: '~$2,250 – $4,500',
      savings: '$2,211–$4,461 (98%–99%)'
    },
    {
      platform: 'Kochava',
      monthlyCost: '$2,500',
      savings: '$2461 (98.44%)'
    }
  ];
  labels: string[] = [];
  maxMau: number = 500000;
  isMobile: boolean = false;
  tooltipPosition: TooltipPosition = 'right';
  isBrowser: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private pricingService: PricingService,
              private matDialog: MatDialog,
              private titleService: Title) {

    titleService.setTitle('ChottuLink - Pricing');
    this.fetchAllSubscriptionPackages();
  }

  ngOnInit() {

    if ( isPlatformBrowser(this.platformId) ) {
      this.isBrowser = true;
      this.isMobile = window.innerWidth < 768;
    }
    const step = this.isMobile ? 100000 : 50000;
    for ( let i = 0; i <= this.maxMau; i += step ) {

      if ( i == 0 ) {

        this.labels.push('0');
      } else {

        this.labels.push(i === 500000 ? '500k+' : `${ i / 1000 }k`);
      }
    }

    if ( this.isMobile ) this.tooltipPosition = 'above';
  }

  formatLabel(value: number): string {
    if ( value >= 1000 ) {
      return Math.round(value / 1000) + 'k';
    }

    return `${ value }`;
  }

  /**
   * Calculates Branch Pricing wrt MAU
   *
   * @returns {string}
   * ---------------------------------------------
   */
  getPriceForChottuLink(): string {
    if ( this.mau <= 25000 ) {
      return '$0';
    } else if ( this.mau <= 75000 ) {
      return '$19';
    } else if ( this.mau <= 150000 ) {
      return '$39';
    } else if ( this.mau < 500000 ) {
      return '$99';
    } else {
      return '$99+';
    }
  }

  /**
   * Calculates Branch Pricing wrt MAU
   *
   * @returns {string}
   * ---------------------------------------------
   */
  getPriceForBranch(): string {
    const mau = this.mau;

    if ( mau <= 10000 ) {
      return '$0';
    } else if ( mau < 500000 ) {

      const total = Math.round((mau - 10000) / 1000) * 5;
      return `$${ total }`;
    } else {
      return '$2,450+';
    }
  }

  /**
   * Fetch All Subscription packages
   *
   * @returns {void}
   * ---------------------------------------------
   */
  fetchAllSubscriptionPackages(): void {

    this.spinner = true;
    const subscription = this.pricingService.fetchAllSubscriptionPackages()
      .pipe(finalize(() => this.spinner = false))
      .subscribe(response => {

        this.subscriptionPackages = response.subscriptionPackDetailsResponses;
      }, error => {

        console.error(error);
      })

    this.subscriptions.push(subscription);
  }


  /**
   * Navigates to chottu link client
   *
   * @returns {void}
   * ---------------------------------------------
   */
  navigateToChottuLink(): void {

    window.open(environment.links.pricing);
  }


  /**
   * Opens the Contact Us Form
   *
   * ---------------------------------------------
   */
  openContactUsDialog(): void {

    const subscription = this.matDialog.open(PricingActionsComponent, {
      id: 'actions-dialog'
    })
      .afterClosed()
      .subscribe((result) => {
        if ( result ) {

        }
      });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {

    UtilityService.unsubscribe(this.subscriptions);
  }
}
