import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';

import header from './templates/header.js';

import router from './templates/router.js';

const routes = {
  '/rafflesForm': rafflesForm,
};

const authenticatedApp = () => html`
  ${header()} ${rafflesForm()} ${router(routes)}
`;

export default authenticatedApp;
