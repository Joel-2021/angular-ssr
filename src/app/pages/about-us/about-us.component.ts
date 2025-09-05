import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconComponent } from '../../components/icon/icon.component';
import { PricingActionsComponent } from '../pricing/pricing-actions/pricing-actions.component';

@Component({
  selector: 'app-about-us',
  imports: [
    IconComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private matDialog: MatDialog) {
  }

  navigateToTavas(): void {
    window.open('https://tavas.ai', '_blank');
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

    subscription.unsubscribe();
  }
}
