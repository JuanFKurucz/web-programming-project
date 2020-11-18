import { html } from 'https://unpkg.com/lit-html?module';

import loginForm from './templates/users/loginForm.js';
import registerForm from './templates/users/registerForm.js';
import resetPassword from './templates/users/resetPassword.js';
import router from './templates/router.js';

const routes = {
  '/': loginForm,
  '/register': registerForm,
  '/resetPassword': resetPassword,
  '/login': loginForm,
};

const unauthenticatedApp = () => html`${router(routes)}`;

export default unauthenticatedApp;
