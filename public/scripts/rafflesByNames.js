import { html } from 'https://unpkg.com/lit-html?module';

import rafflesByNamesForm from './templates/rafflesByNamesForm.js';

const rafflesByNames = () => html` ${rafflesByNamesForm()} `;

export default rafflesByNames;
