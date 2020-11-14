import { html } from 'https://unpkg.com/lit-html?module';

import loginForm from './templates/loginForm.js';
import registerForm from './templates/registerForm.js';
import router from './templates/router.js';

const routes = {
  '/': loginForm,
  '/register': registerForm,
  '/login': loginForm,
};

const unauthenticatedApp = () => html`${router(routes)}`;

export default unauthenticatedApp;
