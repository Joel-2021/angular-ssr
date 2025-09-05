// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { version } from '../../package.json';

export const environment = {
  links: {
    dashboard: 'https://app.chottulink.com/register',
    docs: 'https://docs.chottulink.com',
    pricing: 'https://app.chottulink.com/pricing',
  },
  production: false,
  serverAPI: null,
  serverUrl: null,
  tavas: {
    apiKey: 'phc_vh4xlse2R4VybrpkIrOQG08LZBuFSh8B0FDhioBtTWq',
    host: 'https://dev-env-1.tavas.ai',
    isEnabled: true,
  },
  useHash: true,
  version: version,
};
