import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';

import router from './templates/router.js';

const routes = {
  '/raffles': rafflesForm,
};

const raffles = () => html`${router(routes)}`;

export default raffles;
