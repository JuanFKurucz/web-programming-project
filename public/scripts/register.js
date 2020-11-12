import { html } from 'https://unpkg.com/lit-html?module';

import registerForm from './templates/registerForm.js';

import router from './templates/router.js';

const routes = {
  '/register': registerForm,
};

const register = () => html`${router(routes)}`;

export default register;
