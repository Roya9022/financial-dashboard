export const ROUTES = {
  OVERVIEW: '/',
  MY_STOCK: '/stocks',
  PORTFOLIO: '/portfolio',
  ANALYTIC: '/analytics',
  COMMUNITY: '/community',
  ACCOUNT: '/account',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
