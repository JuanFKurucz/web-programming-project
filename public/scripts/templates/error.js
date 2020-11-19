import { html } from 'https://unpkg.com/lit-html?module';

import { getError, getPastPage } from '../utils/session.js';

import { navigate } from '../utils/navigation.js';

const handleGoToIndex = () => {
  console.log(getPastPage());
  navigate(getPastPage());
};

const errorPage = () => html`<div class="container">
  <section class="raffles">
    <h1>${getError()}</h1>
    <button @click=${handleGoToIndex} class="raffles-button">
      Volver a atras
    </button>
  </section>
</div>`;

export default errorPage;
