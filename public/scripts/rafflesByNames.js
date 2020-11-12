import { html } from 'https://unpkg.com/lit-html?module';

import rafflesByNamesForm from './templates/rafflesByNamesForm.js';

import router from './templates/router.js';

const routes = {
  '/rafflesByNames': rafflesByNamesForm,
};

const rafflesByNames = () => html`${router(routes)}`;

export default rafflesByNames;
