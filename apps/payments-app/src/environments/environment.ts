import { Environment } from './type';

export const environment: Environment = {
  /**
   * Whether to run the app in production mode.
   * Default: false
   */
  production: false,

  /**
   * Whether to enable animation capabilities
   * Default: true
   */
  animation: false,
  landingPageUrl: '/',
  apiRoot: '/api',
  baseHref: '/',
  envVar: {
    ENV_NAME: '',
  },
};
