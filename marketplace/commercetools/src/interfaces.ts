export interface ConfigurationParameters {
  projectKey?: string;
  clientId?: string;
  clientSecret?: string;
  apiEndpoint?: string;
  authApiEndpoint?: string;
  locale?: string;
}

export type Hash = Record<string, any>;

export interface Product {
  sku: string;
  image: string;
  id: string;
  name: string;
  externalLink?: string;
}

export type DeleteFn = (index: number) => void;
