import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';
import rafflesByNames from './templates/rafflesByNamesForm.js';
import instagramRaffleForm from './templates/instagramRaffleForm.js';
import facebookForm from './templates/facebookForm.js';
import listRaffles from './templates/listRaffles.js';
import winRaffle from './templates/winRaffle.js';

import header from './templates/header.js';
import router from './templates/router.js';

const routes = {
  '/': rafflesForm,
  '/rafflesForm': rafflesForm,
  '/rafflesByNamesForm': rafflesByNames,
  '/facebookForm': facebookForm,
  '/instagramRaffleForm': instagramRaffleForm,
  '/winRaffle': winRaffle,
  '/raffles': listRaffles,
};

const authenticatedApp = () => {
  return html` ${header()} ${router(routes)}`;
};

export default authenticatedApp;
