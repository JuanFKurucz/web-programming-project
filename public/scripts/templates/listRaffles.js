import { html } from 'https://unpkg.com/lit-html?module';

import resolvePromise from '../directives/resolvePromise.js';

import { obtainRaffles, deleteRaffle } from '../services/raffles.js';

const raffleItems = (raffle) => {
  const handleDeleteClick = async () => {
    await deleteRaffle(raffle.id);
    window.location.reload();
  };

  let img = null;
  if (raffle.data) {
    img = html`<img
      class="instagramPic"
      src=${raffle.data.media_url}
      alt=${raffle.title}
      title=${raffle.title}
    />`;
  }

  return html`<div>
    <h2>${raffle.title}</h2>
    ${img}
    <p>${raffle.description}</p>
    <p>Ganador: ${raffle.winner}</p>
    <button @click=${handleDeleteClick}>Eliminar</button>
  </div>`;
};

const listRaffles = () => {
  const fetchRaffles = async () => {
    const data = await obtainRaffles();

    if (data.length === 0) {
      return html`<p>No tienes ningun sorteo</p>`;
    }
    return html`<div class="grid">
      ${data.map(raffleItems)}
    </div>`;
  };
  return html` <div class="container">
    <section class="raffles">
      <h1>Sorteos finalizados</h1>
      ${resolvePromise(fetchRaffles())}
    </section>
  </div>`;
};

export default listRaffles;
