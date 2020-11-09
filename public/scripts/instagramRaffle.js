import { html } from 'https://unpkg.com/lit-html?module';

import instagramRaffleForm from './templates/instagramRaffleForm.js';

const instagramRaffle = () => html` ${instagramRaffleForm()} `;

export default instagramRaffle;
