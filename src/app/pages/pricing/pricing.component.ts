import { Component, OnDestroy } from '@angular/core';
import { FormatNumberPipe } from "../../pipes/format-number.pipe";
import { IconComponent } from "../../components/icon/icon.component";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { PricingService } from '../../services/pricing.service';
import { PricingActionsComponent } from './pricing-actions/pricing-actions.component';
import { RouterModule } from '@angular/router';
import { SubscriptionPackage } from '../../models/subscription/subscription-package';
import { UtilityService } from '../../shared/utility.service';
import { finalize, Subscription } from 'rxjs';
import { NoContentComponent } from '../../components/no-content/no-content.component';
import { Title } from '@angular/platform-browser';
import { GetStartedCardComponent } from '../../components/get-started-card/get-started-card.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pricing',
  imports: [ IconComponent, FormatNumberPipe, MatProgressSpinner, RouterModule, NoContentComponent, GetStartedCardComponent ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnDestroy {

  spinner: boolean = false;
  subscriptions: Subscription[] = [];
  subscriptionPackages: SubscriptionPackage[] = [];

  constructor(private pricingService: PricingService,
              private matDialog: MatDialog,
              private titleService: Title) {

    titleService.setTitle('ChottuLink - Pricing');
    this.fetchAllSubscriptionPackages();
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
        if (result) {

        }
      });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {

    UtilityService.unsubscribe(this.subscriptions);
  }
}
