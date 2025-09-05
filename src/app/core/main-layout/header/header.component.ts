import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { AppRoutes } from '../../../models/core/app-routes.enum';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { UtilityService } from '../../../shared/utility.service';
import { environment } from '../../../../environments/environment';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [ CommonModule, RouterModule, MatButton, NgOptimizedImage ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  protected readonly AppRoutes = AppRoutes;

  activeSection: string | null = '';
  currentRoute: string = AppRoutes.HOME;
  isMenuOpen: boolean = false;
  subscriptionList: Subscription[] = [];
  docsLink: string = environment.links.docs;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.handleScrollFromUrl();

    this.subscriptionList.push(
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => {

          this.handleScrollFromUrl();
        })
    );
  }

  /**
   * Toggles the menu state between open and closed.
   * Updates the internal property `isMenuOpen` to its opposite value.
   *
   * @return {void} Does not return any value.
   * ------------------------------------------------------------------
   */
  toggleMenu(): void {

    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Gets the Current Route from URL and Scrolls to that id
   *
   * @return {void} Does not return any value.
   * --------------------------------------------------------------------
   */
  handleScrollFromUrl(): void {

    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments.filter(Boolean).pop();

    this.currentRoute = this.router.url;
    this.activeSection = lastSegment ?? 'home';

    if (isPlatformBrowser(this.platformId)) {

      setTimeout(() => this.scrollToId(this.activeSection ?? ''), 0);
    }
  }

  /**
   * Scroll to id
   * @param id
   * @returns {void} Does not return any value.
   * ------------------------------------------------------------------
   */
  scrollToId(id: string): void {
    this.isMenuOpen = false;

    this.isMenuOpen = false;
    this.activeSection = id;

    if(isPlatformBrowser(this.platformId)) {

      const ele = document.getElementById(id);
      if (!ele) return;

      switch (id) {
        case 'home': {
          const heroSection = document.querySelector('.hero-section');
          const navbar = document.querySelector('.navbar');
          const chottu = document.getElementById('why-chottulink');

          heroSection?.classList.remove('hero-section');
          navbar?.classList.remove('navbar');
          chottu?.classList?.remove('chottu-link-section', 'chottu-scroll-ani');

          setTimeout(() => {
            ele.scrollIntoView();
            navbar?.classList.add('navbar');
            heroSection?.classList?.add('hero-section');
            chottu?.classList?.add('chottu-link-section');
          }, 0);
          break;
        }

        case 'why-chottulink': {
          const feature = document.getElementById('features');

          feature?.classList.remove('feature-section');
          ele.classList?.remove('chottu-link-section', 'chottu-scroll-ani');

          setTimeout(() => {
            ele.scrollIntoView();
            ele.classList?.add('chottu-scroll-ani');
            feature?.classList.add('feature-section');
          }, 0);
          break;
        }

        case 'features': {
          ele.classList.remove('feature-section');

          setTimeout(() => {
            ele.scrollIntoView();
            ele.classList.add('feature-section');
          }, 0);
          break;
        }

        case 'resources': {
          ele.classList.remove('resource-section');

          setTimeout(() => {
            ele.scrollIntoView();
            ele.classList.add('resource-section');
          }, 0);
          break;
        }
      }
    }
  }

  /**
   * Updates the current route of the application to the pricing route.
   * This method also ensures that the menu is closed after the route change.
   *
   * @return {void}
   * ------------------------------------------------------------------
   */
  updateCurrentRoute(): void {

    this.currentRoute = AppRoutes.PRICING;
    this.isMenuOpen = false;
  }

  /**
   * Navigates the user to the dashboard by opening the dashboard URL in a new browser tab.
   * @return {void} Does not return a value.
   * ------------------------------------------------------------------
   */
  navigateToDashboard(): void {

    window.open(environment.links.dashboard, '_blank');

    if (this.isMenuOpen) {

      this.isMenuOpen = false;
    }
  }

  /**
   * Opens the developer guide documentation in a new browser tab.
   *
   * @return {void} This method does not return a value.
   * ------------------------------------------------------------------
   */
  navigateToDeveloperGuide(): void {

    window.open(environment.links.docs, '_blank');
  }

  ngOnDestroy(): void {

    UtilityService.unsubscribe(this.subscriptionList);
  }
}
