import { html } from 'https://unpkg.com/lit-html?module';

import { logOut } from './services/auth.js';
import router from './templates/router.js';

const routes = {
  '/logOut': logOut,
};

const authenticatedApp = () => html`${router(routes)}`;

export default authenticatedApp;
