export interface Environment {
  production: boolean;
  animation: boolean;
  landingPageUrl: string;
  apiRoot: string;
  baseHref: string;
  localize?: boolean;
  testing?: boolean;
  direction?: string;
  envVar?: any;
}
