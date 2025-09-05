import { Routes } from '@angular/router';
import { AppRoutes } from './models/core/app-routes.enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/main-layout/main-layout.component').then((c) => c.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoutes.HOME
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing.component').then((c) => c.PricingComponent),
        data: {
          breadcrumb: 'Pricing'
        }
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent),
        data: {
          breadcrumb: 'About Us'
        }
      },
      {
        path: 'legal',
        redirectTo: AppRoutes.TERMS_OF_USE,
        pathMatch: 'full'
      },
      {
        path: 'legal',
        children: [
          {
            path: ':id',
            loadComponent: () => import('./pages/legal/legal.component').then((c) => c.LegalComponent),
            data: {
              allowedTypes: [ 'privacy-policy', 'refund-policy', 'terms-of-use' ]
            }
          }
        ]
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
        data: {
          allowedTypes: [ 'home', 'features', 'why-chottulink' ],
          breadcrumb: 'ChottuLink | Deep Linking | Firebase Dynamic Links Alternative'
        }
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
  }
];

