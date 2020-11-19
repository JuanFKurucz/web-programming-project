import { html } from 'https://unpkg.com/lit-html?module';

import { setPastPage } from '../utils/session.js';

import notFound from './notFound.js';

const router = (routes) => {
  const route = routes[window.location.pathname] || notFound;
  if (window.location.pathname !== '/error') {
    setPastPage(window.location.pathname);
  }
  return html`${route()}`;
};

export default router;
