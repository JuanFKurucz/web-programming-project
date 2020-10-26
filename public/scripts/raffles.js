import { html } from 'https://unpkg.com/lit-html?module';

import rafflesForm from './templates/rafflesForm.js';

const raffles = () => html` ${rafflesForm()} `;

export default raffles;
