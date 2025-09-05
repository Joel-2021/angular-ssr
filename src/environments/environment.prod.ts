import { version } from '../../package.json';

export const environment = {
  links: {
    dashboard: 'https://app.chottulink.com/register',
    docs: 'https://docs.chottulink.com',
    pricing: 'https://app.chottulink.com/pricing',
  },
  production: true,
  serverUrl: 'https://api2.chottulink.com',
  serverAPI: '/chotuCore/',
  tavas: {
    apiKey: 'phc_nMUpNARA7UNgZZffvrm0RBBh3YTOA9yn6XB1onxwR9C',
    host: 'https://t.chottu.link',
    isEnabled: true,
  },
  useHash: false,
  version: version
};
