import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';
import rafflesByNames from './templates/rafflesByNamesForm.js';
import facebookForm from './templates/facebookForm.js';

import header from './templates/header.js';
import router from './templates/router.js';

const routes = {
  '/': rafflesForm,
  '/rafflesForm': rafflesForm,
  '/rafflesByNames': rafflesByNames,
  '/facebookForm': facebookForm,
};

const authenticatedApp = () => html` ${header()} ${router(routes)} `;

export default authenticatedApp;
