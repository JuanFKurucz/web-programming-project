import { html } from 'https://unpkg.com/lit-html?module';

import { navigate } from '../utils/navigation.js';

const handleGoToIndex = () => {
  navigate('/');
};

const notFound = () => html`<div class="container">
  <section class="raffles">
    <h1>Pagina no encontrada</h1>
    <button @click=${handleGoToIndex} class="raffles-button">
      Volver al inicio
    </button>
  </section>
</div>`;

export default notFound;
