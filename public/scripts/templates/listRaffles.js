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
    img = raffle.data.media_url;
  }

  return html`<div>
    <h2>${raffle.title}</h2>
    <img
      class="instagramPic"
      src=${img}
      alt=${raffle.title}
      title=${raffle.title}
    />
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
