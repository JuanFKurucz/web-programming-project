import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/raffles/rafflesForm.js';
import rafflesByNames from './templates/raffles/rafflesByNamesForm.js';
import instagramRaffleForm from './templates/raffles/instagramRaffleForm.js';
import facebookForm from './templates/users/facebookForm.js';
import listRaffles from './templates/raffles/listRaffles.js';
import winRaffle from './templates/raffles/winRaffle.js';

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
