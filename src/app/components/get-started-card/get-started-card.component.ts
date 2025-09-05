import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-get-started-card',
  imports: [],
  templateUrl: './get-started-card.component.html',
  styleUrl: './get-started-card.component.scss'
})
export class GetStartedCardComponent {

  constructor() {
  }

  /**
   * Navigates the user to the dashboard by opening the dashboard URL in a new browser tab.
   * @return {void} Does not return a value.
   * ------------------------------------------------------------------
   */
  navigateToDashboard(): void {

    window.open(environment.links.dashboard, '_blank');
  }
}
