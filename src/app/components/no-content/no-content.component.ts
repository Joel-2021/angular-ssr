import { Component, Input, SimpleChanges } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'no-content',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './no-content.component.html',
  standalone: true,
  styleUrl: './no-content.component.scss'
})
export class NoContentComponent {

  // @Input() type: NoContentType = NoContentType.DEFAULT;
  @Input() class: string = '';

  icon: string = '';
  title: string = '';
  description: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    // this.prepareDetails();
  }

  /**
   * Prepare No Content Details
   * ----------------------------------------------------------------
   */
  // prepareDetails(): void {
  //
  //   switch (this.type) {
  //
  //     case NoContentType.DEFAULT:
  //       this.icon = 'empty-box';
  //       this.title = 'Nothing Here Yet';
  //       this.description = 'Start by adding new content to see something here.';
  //       break;
  //
  //     case NoContentType.DASHBOARD:
  //       this.icon = 'dashboard';
  //       this.title = 'Your Dashboard is Empty';
  //       this.description = 'Please try again later';
  //       break;
  //
  //     case NoContentType.LINKS:
  //       this.icon = 'broken-link';
  //       this.title = 'No Links Found';
  //       this.description = `You haven't added any links yet. Start sharing!`;
  //       break;
  //
  //     case NoContentType.ANALYTICS:
  //       this.icon = 'analytics';
  //       this.title = 'Analytics Unavailable';
  //       this.description = 'No data to display yet. Connect your content to see stats.';
  //       break;
  //
  //     case NoContentType.FAQ:
  //       this.icon = 'faq';
  //       this.title = 'No FAQs Available';
  //       this.description = 'We haven’t added any frequently asked questions yet. Please check back soon or reach out if you need help.';
  //       break;
  //
  //     case NoContentType.COMING_SOON:
  //       this.icon = 'coming-soon';
  //       this.title = 'Coming Soon';
  //       this.description = `We're working on something awesome. Stay tuned!`;
  //       break;
  //   }
  // }

}
