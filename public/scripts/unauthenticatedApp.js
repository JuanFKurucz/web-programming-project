import { html } from 'https://unpkg.com/lit-html?module';

import loginForm from './templates/loginForm.js';
import router from './templates/router.js';

const routes = {
  '/': loginForm,
  '/login': loginForm,
};

const unauthenticatedApp = () => html`${router(routes)}`;

export default unauthenticatedApp;
