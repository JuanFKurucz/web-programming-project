import { html } from 'https://unpkg.com/lit-html?module';

import { logOut } from './services/auth.js';
import rafflesForm from './templates/rafflesForm.js';

import router from './templates/router.js';

const routes = {
  '/rafflesForm': rafflesForm,
};

const authenticatedApp = () => html`
  ${rafflesForm()} ${router(routes)}
  <button @click=${logOut} type="button">Log Out</button>
`;

export default authenticatedApp;
