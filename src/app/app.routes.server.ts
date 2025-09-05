import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: 'home' },
        { id: 'features' },
        { id: 'why-chottulink' },
      ];
    }
  },
  // {
  //   path: 'legal/:id',
  //   renderMode: RenderMode.Prerender,
  //   getPrerenderParams: async () => {
  //     return [
  //       { id: 'privacy-policy' },
  //       { id: 'terms-of-service' },
  //       { id: 'refund-policy' },
  //     ];
  //   }
  // },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
