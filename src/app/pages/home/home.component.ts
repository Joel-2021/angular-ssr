import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { GetStartedCardComponent } from '../../components/get-started-card/get-started-card.component';
import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    GetStartedCardComponent, SharedModule, NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    isPlatformBrowser(platformId);
  }

  /**
   * Navigates the user to the dashboard by opening the dashboard URL in a new browser tab.
   * @return {void} Does not return a value.
   * ------------------------------------------------------------------
   */
  navigateToDashboard(): void {

    if(isPlatformBrowser(this.platformId)){

      window.open(environment.links.dashboard, '_blank');
    }
  }
}
