import { html } from 'https://unpkg.com/lit-html?module';

import loginForm from './templates/loginForm.js';

const unauthenticatedApp = () => html` ${loginForm()} `;

export default unauthenticatedApp;
