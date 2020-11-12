import { html } from 'https://unpkg.com/lit-html?module';

import instagramRaffleForm from './templates/instagramRaffleForm.js';

import router from './templates/router.js';

const routes = {
  '/instagramRaffle': instagramRaffleForm,
};

const instagramRaffle = () => html`${router(routes)}`;

export default instagramRaffle;
