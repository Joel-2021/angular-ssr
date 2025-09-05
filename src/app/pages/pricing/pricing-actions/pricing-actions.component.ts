import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';
import { TavasAnalyticsService } from '../../../shared/tavas-analytics.service';
import { NotifyService } from '../../../shared/notify.service';

@Component({
  selector: 'app-pricing-actions',
  imports: [ MatDialogModule, SharedModule ],
  templateUrl: './pricing-actions.component.html',
  styleUrl: './pricing-actions.component.scss'
})
export class PricingActionsComponent {

  name: string = '';
  email: string = '';
  phone: string = '';

  /**
   * Handle submit
   * @returns {void}
   * ------------------------------------------------------------------
   */
  handleSubmit(): void {

    TavasAnalyticsService.capture('Custom Pricing Requested', {
      name: this.name,
      email: this.email,
      phone: this.phone,
    });

    NotifyService.success('Request submitted successfully!');
  }
}
