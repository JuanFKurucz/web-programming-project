import { html } from 'https://unpkg.com/lit-html?module';

import { obtainLastRaffle } from '../services/raffles.js';

const winRaffle = async () => {
  const data = await obtainLastRaffle();

  return html` <div class="container">
    <section class="raffles">
      <h1>El ganador del sorteo es</h1>
      <p>Ganador: ${data.winner}</p>
    </section>
  </div>`;
};

export default winRaffle;
