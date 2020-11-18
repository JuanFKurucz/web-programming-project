import { html } from 'https://unpkg.com/lit-html?module';
import resolvePromise from '../directives/resolvePromise.js';

import { obtainLastRaffle } from '../services/raffles.js';

const winRaffle = () => {
  const fetchRaffles = async () => {
    const data = await obtainLastRaffle();
    console.log(data);

    return html`<div class="grid">
      ${data.winner}
    </div>`;
  };

  return html` <div class="container">
    <section class="raffles">
      <h1>El ganador del sorteo es</h1>
      <p>Ganador: ${resolvePromise(fetchRaffles())}</p>
    </section>
  </div>`;
};

export default winRaffle;
