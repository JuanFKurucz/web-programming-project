import { html, render } from 'https://unpkg.com/lit-html?module';

import { isAuthenticated } from './utils/auth.js';
import authenticatedApp from './authenticatedApp.js';
import unauthenticatedApp from './unauthenticatedApp.js';
// import raffles from './raffles.js';
// import rafflesByNames from './rafflesByNames.js';

const renderApp = () => {
  const app = isAuthenticated() ? authenticatedApp : unauthenticatedApp;
  render(html`${app()}`, document.body);
};

window.addEventListener('auth', renderApp);

renderApp();
