import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';
import rafflesByNames from './templates/rafflesByNamesForm.js';
import instagramRaffleForm from './templates/instagramRaffleForm.js';
import facebookForm from './templates/facebookForm.js';
import listRaffles from './templates/listRaffles.js';
import resultForm from './templates/resultForm.js';

import header from './templates/header.js';
import router from './templates/router.js';

const routes = {
  '/': rafflesForm,
  '/rafflesForm': rafflesForm,
  '/rafflesByNames': rafflesByNames,
  '/facebookForm': facebookForm,
  '/instagramRaffleForm': instagramRaffleForm,
  '/resultForm': resultForm,
  '/raffles': listRaffles,
};

const authenticatedApp = () => {
  return html` ${header()} ${router(routes)}`;
};

export default authenticatedApp;
